import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import {
  InputNumberSizesEnum,
  InputNumberSizesTypes,
  InputNumberType,
  InputNumberValueWithId
} from './input-number.enum';
import { v4 as uuidv4 } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';

const noop = () => {};

export type DecimalMarkerType = '.' | ',' | ['.', ','];

@Component({
  selector: 'mrx-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputNumberComponent), multi: true},
  ]
})
export class InputNumberComponent implements ControlValueAccessor, OnInit {

  public static decimalMarker?: DecimalMarkerType;
  public static thousandsSeparator: string;
  private static _delimitersInitialised = false;

  numberForm: FormGroup;
  invalidMessageStart: string | undefined | null;
  invalidMessageEnd: string | undefined | null;
  decimals = 2;

  private invokeChanged = true;
  private onTouchedCallback: () => void = noop;
  private propagateChange: (_: any) => void = noop;
  private _min = -999999999.99;
  private _max = 999999999.99;
  private _isValid = true;


  // SAVE STATE
  public uuid: string = uuidv4()
  @Input() public fields: Field[] = [];

  @Input() public placeholder?: string;
  @Input() public innerClass = '';
  @Input() public customClasses = '';
  @Input() public required = false;
  @Input() public allowNegative = false;
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public size: InputNumberSizesTypes = 'large';
  @Input() public separator?: string;
  @Input() public decimalSeparator?: DecimalMarkerType;

  // ERROR
  @Input() public invalid = false;
  @Input() public checkInvalid: true | false | null = null;

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Input('numberType')
  public set setNumberType(value: InputNumberType) {
    this.decimals = value === 'float' ? 2 : value === 'percent' ? 1 : 0;
  }

  @Input('invalidMessage')
  public set setInvalidMessage(value: string) {
    if (value) {
      const para = value.split('{0}');
      this.invalidMessageStart = para[0];
      this.invalidMessageEnd = para[1];
    } else {
      this.invalidMessageStart = null;
      this.invalidMessageEnd = null;
    }
  }

  @Input('disabled')
  public set setDisabled(value: boolean) {
    this.invokeChanged = false;
    if (value) {
      this.numberForm.disable();
    } else {
      this.numberForm.enable();
    }
    this.invokeChanged = true;
  }

  @Input('minValue')
  public set setMin(val: number) {
    if (val) {
      this._min = val;
      const c = this.getControl('number');
      if (c) {
        c.setValidators([Validators.min(this._min), Validators.max(this._max)]);
      }
    }
  }

  @Input('maxValue')
  public set setMax(val: number) {
    if (val) {
      this._max = val;
      const c = this.getControl('number');
      if (c) {
        c.setValidators([Validators.min(this._min), Validators.max(this._max)]);
      }
    }
  }

  @Output() public modelChange: EventEmitter<InputNumberValueWithId> = new EventEmitter<InputNumberValueWithId>();

  constructor(fb: FormBuilder) {
    this.numberForm = fb.group({
      number: [''],
    });

    InputNumberComponent.initNumberFormat();
  }

  get getClasses(): string {
    return `${InputNumberSizesEnum[this.size]} ${this.customClasses}`;
  }

  get decimalMarker(): '.' | ',' | ['.', ','] {
    return this.decimalSeparator || InputNumberComponent.decimalMarker || ',';
  }

  get thousandsSeparator(): string {
    return this.separator || InputNumberComponent.thousandsSeparator;
  }

  get isValid(): boolean {
    return this._isValid;
  }

  get maxMessage(): string {
    const dec = this.decimalMarker[0];
    return this._max.toLocaleString('en').split(',').join(this.thousandsSeparator).replace('.', dec);
  }

  get isVerified(): boolean {
    const f = this.getControl('number');
    return !this.required ||
        (this.required && f.value !== null && f.value !== undefined && this.isValid);
  }

  static initNumberFormat(): void{
    if(this._delimitersInitialised){
      return;
    }
    // системный формат числа с дробной частью и группой разраядов (тысячи)
    const c = Intl.NumberFormat().formatToParts(1234.5);

    const t = c.find(x => x.type === 'group')?.value;

    // разделитель групп
    this.thousandsSeparator = t?.charCodeAt(0) === 160 ? ' ' : t || ' ';

    // разделитель дробной части
    this.decimalMarker = (c.find(x => x.type === 'decimal')?.value as (','|'.'));

    this._delimitersInitialised = true;
  }

  ngOnInit(): void {
    this.numberForm.valueChanges.subscribe(val => {
      if (this.invokeChanged) {
        if (this.numberForm.valid) {
          const num = this.numberForm.value.number;
          let numValue: number;
          if (num === '') {
            this.propagateChange(null);
          }
          if (num && typeof(num) === 'string') {
            numValue = parseFloat(num.replace(',', '.').split(this.thousandsSeparator).join(''));
            this.propagateChange(numValue);
            this.modelChange.emit({value: numValue, id: this.uuid})
          } else if (typeof(num) === 'number') {
            numValue = num;
            this.propagateChange(numValue);
            this.modelChange.emit({value: numValue, id: this.uuid})
          }
        }
      }
    });
    this.numberForm.statusChanges.subscribe(val => {
      this.checkIsValid();
    });
  }

  resetToMax(event: any) {
    event.preventDefault()

    const f = this.getControl('number');
    f.setValue(this._max);
  }

  checkIsValid() {
    const f = this.getControl('number');
    this._isValid = this.numberForm.disabled || (f && f.valid || (!f.dirty && !f.touched));
  }

  writeValue(value: any): void {
    const f = this.getControl('number');
    f.setValue(value, {emitEvent: false, emitViewToModelChange: false});
  }

  getControl(name: string) {
    return this.numberForm.get(name) as FormControl;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}

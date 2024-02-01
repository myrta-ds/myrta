import {
  Component, ContentChild, ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AddTagFn } from '@ng-select/ng-select/lib/ng-select.component';
import { v4 as uuidv4 } from 'uuid';
import {
  InputSelectSizeEnum,
  InputSelectSizeTypes,
  InputSelectValueTypes,
  InputSelectValueWithId
} from './input-select.enum';
import { Field } from '../../../services';

@Component({
  selector: 'mrx-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSelectComponent),
      multi: true,
    },
  ],
})
export class InputSelectComponent implements ControlValueAccessor
{
  public maxSelectedItems!: number;
  public _value: InputSelectValueTypes = [];

  // SAVE STATE
  public uuid: string = uuidv4()
  @Input() public fields: Field[] = [];

  @Input() public size: InputSelectSizeTypes = 'large';

  @Input() public selected!: object | any[];
  @Input() public bindValue = '';
  @Input() public bindLabel = '';
  @Input() public customClasses = '';
  @Input() public wrapperCustomClasses = '';
  @Input() public multiple = false;
  @Input() public loading = false;
  @Input() public addTag: boolean | AddTagFn = false;
  @Input() public clearable = true;
  @Input() public items: any[] = [];
  @Input() public groupBy: string | ((value: any) => any) = '';
  @Input() public emptyValue: any;
  @Input() public virtualScroll = false;
  @Input() public trackByFn: any;
  @Input() public displayValue!: string | string[];
  @Input() public disabledFromDisplay!: boolean;
  @Input() public num = '';
  @Input() public maxLength = 0;
  @Input() public customSearchFn?: (term: string, item: any) => boolean;

  @Input() public isBottomLabel = false;
  @Input() public search = false;
  @Input() public required = false;
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public showEmptyFields = false;
  @Input() public placeholder = '';
  @Input() public searchable = true;
  @Input() public loadLabel = '';
  @Input() public notFoundText = 'Не найдено';
  @Input() public closeOnSelect = true;
  @Input() public multiCollapseCount: number | null = null;

  // ERROR
  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  // LABEL
  @Input() public label = '';
  @Input() public labelRequiredHidden = false;
  @Input() public labelExtraClass: object | string = '';

  // TOOLTIP
  @Input() public tooltip = '';
  @Input() public tooltipHidden = false;
  @Input() public tooltipVisible = false;

  // REFS
  @ContentChild('selectOptionsTemplate') selectOptionsTemplate!: TemplateRef<ElementRef>;
  @ContentChild('labelTemplate') labelTemplate!: TemplateRef<ElementRef>;
  @ContentChild('tagTemplate') tagTemplate!: TemplateRef<ElementRef>;
  @ContentChild('multiLabelTemplate') multiLabelTemplate!: TemplateRef<ElementRef>;

  @Input('maxSelectedItems')
  set setMaxSelectedItems(val: number) {
    if (val) {
      this.maxSelectedItems = val;
    }
  }
  @Output() public changed: EventEmitter<InputSelectValueTypes> = new EventEmitter<InputSelectValueTypes>();
  @Output() public modelChange: EventEmitter<InputSelectValueWithId> = new EventEmitter<InputSelectValueWithId>();
  @Output() public searched: EventEmitter<{ term: string; items: any[] }> = new EventEmitter<{ term: string; items: any[] }>();

  public get isValid(): boolean {
    return true;
  }

  public get isVerified(): boolean {
    return !(
      this.value === null ||
      this.value === undefined ||
      this.value === this.emptyValue
    );
  }

  get value() {
    return this._value;
  }

  set value(value: InputSelectValueTypes) {
    this._value = value;
  }

  public get isInvalidMessage(): boolean {
    return !!this.invalidMessage || !!this.invalidMessage.length;
  }

  public get invalidMessageArray(): string[] {
    if (typeof this.invalidMessage === 'string') {
      return Array(this.invalidMessage);
    } else {
      return this.invalidMessage;
    }
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : ''
  }

  public get getClasses(): string {
    return `${this.customClasses} ${this.checkValidClasses} ${InputSelectSizeEnum[this.size]}`;
  }

  protected onChange(val: any): void {}
  private onTouched = () => {};

  public writeValue(value: any) {
    this._value = value;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public updateValue(insideValue: InputSelectValueTypes): void {
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.modelChange.emit({value: insideValue, id: this.uuid})
    this.onChange(insideValue);
    this.onTouched();
  }

  public updateSearch(event: { term: string; items: any[] }): void {
    this.searched.emit({ term: event.term, items: event.items})
  }
}

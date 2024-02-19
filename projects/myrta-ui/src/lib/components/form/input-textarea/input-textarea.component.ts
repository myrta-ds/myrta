import {
  AfterViewChecked, ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  InputTextareaSizesEnum,
  InputTextareaSizesTypes,
  InputTextareaValueTypes, InputTextareaValueWithId
} from './input-textarea.enum';
import { v4 as uuidv4 } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextareaComponent),
      multi: true,
    },
  ],
})
export class InputTextareaComponent implements ControlValueAccessor {
  public value: InputTextareaValueTypes = '';
  public selectionStart: number | undefined;
  public selectionEnd: number | undefined;
  private _innerHtml?: string;

  // SAVE STATE
  public uuid: string = uuidv4();
  @Input() public fields: Field[] = [];

  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public autosize = true;
  @Input() public maxlength = 0;
  @Input() public minlength = 0;
  @Input() public rows = 1;
  @Input() public placeholder = '';
  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;
  @Input() public customClasses = '';
  @Input() public mask = '';
  @Input() public size: InputTextareaSizesTypes = 'large';

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Output() public changed: EventEmitter<InputTextareaValueTypes> = new EventEmitter<InputTextareaValueTypes>();
  @Output() public blurred: EventEmitter<InputTextareaValueTypes> = new EventEmitter<InputTextareaValueTypes>();
  @Output() public modelChange: EventEmitter<InputTextareaValueWithId> = new EventEmitter<InputTextareaValueWithId>();

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

  public get isValid(): boolean {
    return this.baseValidate();
  }

  public get readonlyClass(): string {
    return this.readonly ? 'mrx-input__readonly' : '';
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : '';
  }

  public get getClasses(): string {
    return `${InputTextareaSizesEnum[this.size]} ${this.customClasses} ${this.readonlyClass} ${this.checkValidClasses}`;
  }

  public get innerHtml() {
    return this._innerHtml && this._innerHtml.length > 0 ? this._innerHtml : this.value;
  }

  public set innerHtml(value: string) {
    this._innerHtml = value;
  }

  public updateSelection(event: any) {
    this.selectionStart = event.target.selectionStart;
    this.selectionEnd = event.target.selectionEnd;
  }

  protected baseValidate(): boolean {
    if (this.minlength) {
      return !!this.value && this.value.length >= this.minlength;
    }
    return true;
  }

  public onFocus(): void {
    this.inputElement.nativeElement.focus()
  }

  public get isShowBlock() {
    return this.disabled || this.readonly
  }

  private onChange = (value: InputTextareaValueTypes) => {
  };
  private onTouched = () => {
  };

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  private processValueForViewOnly(value: string): void {

  }

  public writeValue(outsideValue: InputTextareaValueTypes): void {
    if ((this.inputElement?.nativeElement && document.activeElement !== this.inputElement.nativeElement) || this.isShowBlock) {
      this.value = outsideValue;
    }

    if (this.disabled) {
      this.processValueForViewOnly(outsideValue);
      return;
    }
  }

  public updateValue(insideValue: InputTextareaValueTypes): void {
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.modelChange.emit({ value: insideValue, id: this.uuid });
    this.onChange(insideValue);
    this.onTouched();
  }

  public blurUpdateValue(): void {
    this.blurred.emit(this.value)
  }
}

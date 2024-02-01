import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputTextSizesEnum, InputTextSizesTypes, InputTextValueTypes, InputTextValueWithId } from './input-text.enum';
import { v4 as uuidv4 } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  public value: InputTextValueTypes = '';
  public selectionStart: number | undefined;
  public selectionEnd: number | undefined;

  // SAVE STATE
  public uuid: string = uuidv4()
  @Input() public fields: Field[] = [];

  @Input() public disabled = false;
  @Input() public required = false;
  @Input() public readonly = false;
  @Input() public maxlength = 0;
  @Input() public minlength = 0;
  @Input() public placeholder = '';
  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;
  @Input() public customClasses = '';
  @Input() public size: InputTextSizesTypes = 'large';
  @Input() public isTooltipValue = false;

  // MASK
  @Input() mask = '';
  @Input() maskPrefix = '';
  @Input() showMaskTyped = false;
  @Input() maskDropSpecialCharacters: boolean | string[] = true;

  @ViewChild('inputElement') inputElement!: ElementRef;

  @Output() public changed: EventEmitter<InputTextValueTypes> = new EventEmitter<InputTextValueTypes>();
  @Output() public modelChange: EventEmitter<InputTextValueWithId> = new EventEmitter<InputTextValueWithId>();

  public get isInvalidMessage(): boolean {
    return !!this.invalidMessage || !!this.invalidMessage.length;
  }

  public get isValid(): boolean {
    return this.baseValidate();
  }

  public get isVerified(): boolean {
    return (
      !this.required ||
        (this.required && this.value != null && this.value !== '' && this.isValid)
    );
  }

  public get readonlyClass(): string {
    return this.readonly ? 'mrx-input__readonly' : '';
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : ''
  }

  public get getClasses(): string {
    return `${InputTextSizesEnum[this.size]} ${this.customClasses} ${this.readonlyClass} ${this.checkValidClasses}`;
  }

  public get getTooltipValue(): string {
    return this.isTooltipValue ? this.value : ''
  }

  private formatValue(value: string): string {
    return value.length === this.maskPrefix.length ? '' : value
  }

  public insertPositionText(tagText: string): void {
    if (this.selectionStart && this.selectionEnd) {
      const firstText = this.value ? this.value.substring(0, this.selectionStart) : ''
      const secondText = this.value.substring(this.selectionEnd);
      const text = firstText + tagText + secondText;

      this.updateValue(text);

      setTimeout(() => {
        this.inputElement.nativeElement.selectionStart = (firstText + tagText).length;
        this.inputElement.nativeElement.selectionEnd = (firstText + tagText).length;
        this.inputElement.nativeElement.focus();
      }, 0);
    } else {
      const text = this.value ? this.value : '' + tagText

      this.updateValue(text);

      setTimeout(() => {
        this.inputElement.nativeElement.selectionStart = text.length;
        this.inputElement.nativeElement.selectionEnd = text.length;
        this.inputElement.nativeElement.focus();
      }, 0);
    }
  }

  protected baseValidate(): boolean {
    if (this.minlength) {
      return !!this.value && this.value.length >= this.minlength;
    }
    return true;
  }

  public updateSelection(event: any) {
    this.selectionStart = event.target.selectionStart;
    this.selectionEnd = event.target.selectionEnd;
  }

  private onChange = (value: InputTextValueTypes) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: InputTextValueTypes) {
    this.value = outsideValue;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public updateValue(insideValue: InputTextValueTypes) {
    this.value = insideValue;
    this.changed.emit(this.formatValue(insideValue));
    this.modelChange.emit({value: this.formatValue(insideValue), id: this.uuid})
    this.onChange(this.formatValue(insideValue));
    this.onTouched();
  }
}

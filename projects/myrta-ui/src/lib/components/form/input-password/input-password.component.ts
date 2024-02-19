import { Component, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  InputPasswordSizesEnum,
  InputPasswordSizesTypes,
  InputPasswordValueTypes
} from './input-password.enum';

@Component({
  selector: 'mrx-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPasswordComponent),
      multi: true,
    },
  ],
})
export class InputPasswordComponent implements ControlValueAccessor {
  public value: InputPasswordValueTypes = '';
  public isShowPassword = false

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
  @Input() public size: InputPasswordSizesTypes = 'large';

  @Output() public changed: EventEmitter<InputPasswordValueTypes> = new EventEmitter<InputPasswordValueTypes>();

  constructor() { }

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
    return `${InputPasswordSizesEnum[this.size]} ${this.customClasses} ${this.readonlyClass} ${this.checkValidClasses}`;
  }

  protected baseValidate(): boolean {
    if (this.minlength) {
      return !!this.value && this.value.length >= this.minlength;
    }
    return true;
  }

  public toggleShow(): void {
    this.isShowPassword = !this.isShowPassword
  }

  private onChange = (value: InputPasswordValueTypes) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: InputPasswordValueTypes) {
    this.value = outsideValue;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public updateValue(insideValue: InputPasswordValueTypes) {
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.onChange(insideValue);
    this.onTouched();
  }
}

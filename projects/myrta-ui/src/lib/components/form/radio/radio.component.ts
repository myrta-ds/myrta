import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioTypes, RadioTypesEnum } from "./radio.enum";

export type RadioValueTypes = false;

@Component({
  selector: 'mrx-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  public modelValue: any;

  @Input() public required = false;
  @Input() public type: RadioTypes = 'default';
  @Input() public name: string = '';
  @Input() public boldLabel = true;
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public placeholder = '';
  @Input() public label = '';
  @Input() public customClasses = '';

  @Input() public invalid = false;

  @Input('value') _value: any;

  get value() {
    return this._value;
  }

  set value(value) {

    if(!!value){
      this._value = value;
      this.onChange(value);
      this.onTouched();
    }
  }

  public get getClasses(): string {
    return `${RadioTypesEnum[this.type]} ${this.customClasses}`;
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};

  registerOnChange(fn: () => {}) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}) {
    this.onTouched = fn;
  }

  writeValue(outsideValue: any) {
    this.modelValue = outsideValue;
  }

  toggleChange(event: any){
    // Is a mapping here necessary to assign the outer ngModel bound
    // property it's new value??
  }

  valueChanged(event: any){

    this.onChange(this.modelValue);

  }
}

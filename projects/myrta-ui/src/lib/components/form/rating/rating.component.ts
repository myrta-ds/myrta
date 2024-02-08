import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import {
  RatingElement,
  RatingSizesEnum,
  RatingSizesTypes, RatingValueSizesEnum,
  RatingValueSizesTypes,
  RatingValueType,
  RatingViewMode, RatingWrapperSizesEnum
} from './rating.enum';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { toNumberFormat } from '../../../helpers/number-format';

@Component({
  selector: 'mrx-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
})
export class RatingComponent implements ControlValueAccessor, OnInit {
  public value: RatingValueType = 0
  public elements: RatingElement[] = []

  @Input() ratingCount = 5
  @Input() size: RatingSizesTypes = 'large'
  @Input() valueSize: RatingValueSizesTypes = 'large'
  @Input() iconClass = 'icon-star-filled'
  @Input() customClasses = ''
  @Input() readonly = false
  @Input() disabled = false
  @Input() double = false
  @Input() viewMode: RatingViewMode = 'none'

  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  @Output() public changed: EventEmitter<RatingValueType> = new EventEmitter<RatingValueType>();

  constructor() { }

  ngOnInit(): void {
    this.elements = Array(this.ratingCount).fill(0).map((x,i)=> {
      return { value: i + 1, filled: false, double: false }
    })
  }

  public get isValid(): boolean {
    return this.baseValidate();
  }

  public get isInvalidMessage(): boolean {
    return !!this.invalidMessage || !!this.invalidMessage.length;
  }

  public get readonlyClass(): string {
    return this.readonly ? 'mrx-input__readonly' : '';
  }

  public get getWrapperClasses() {
    return`${this.customClasses} ${RatingWrapperSizesEnum[this.size]}`
  }

  public get getClasses(): string {
    return `${RatingSizesEnum[this.size]} ${this.readonlyClass}`;
  }

  public get getValueClasses(): string {
    return `${RatingValueSizesEnum[this.size]}`;
  }

  public get formattedValue(): number {
    return Number((Math.round(this.value * 2) / 2).toFixed(this.value % 1 == 0 ? 0 : 1))
  }

  public get ratingText(): string {
    const ratingValue = this.ratingCount / 5

    switch (true) {
      case (this.value / ratingValue) > 0 && (this.value / ratingValue) <= 1.5:
        return 'Очень плохо'
      case (this.value / ratingValue) > 1.5 && (this.value / ratingValue) <= 2.5:
        return 'Плохо'
      case (this.value / ratingValue) > 2.5 && (this.value / ratingValue) <= 3.5:
        return 'Удовлетворительно'
      case (this.value / ratingValue) > 3.5 && (this.value / ratingValue) <= 4.5:
        return 'Хорошо'
      case (this.value / ratingValue) > 4.5:
        return 'Отлично'
      default:
        return ''
    }
  }

  public get canActive() {
    return !(this.disabled || this.readonly)
  }

  public toNumberFormatFunc(value: number) {
    return toNumberFormat(value, this.double ? 1 : 0)
  }

  protected baseValidate(): boolean {
    return true;
  }

  public changeValue(value: number, type: 'single' | 'double'): void {
    if (type === 'single') {
      this.updateValue(value)
    } else {
      this.updateValue(value - 0.5)
    }
  }

  public hoverElementHandle(item: RatingElement, type: 'single' | 'double') {
    if (type === 'single') {
      this._updateState(item.value)
    } else {
      this._updateState(item.value - 0.5)
    }
  }

  public resetElementHandle() {
    this._updateState(this.formattedValue)
  }

  public trackByFn(index: number, item: RatingElement) {
    return item.value
  }

  private onChange = (value: RatingValueType) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: RatingValueType) {
    this.value = outsideValue;

    if (outsideValue !== null) {
      this._updateState(this.formattedValue)
    }
  }

  public setDisabledState(isDisabled: boolean) {
    // this.disabled = isDisabled;
  }

  public updateValue(insideValue: RatingValueType) {
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.onChange(insideValue);
    this.onTouched();
  }

  private _updateState(value: number) {
    this.elements.forEach((element: RatingElement) => {
      element.filled = element.value - 0.5 <= value
      element.double = element.value - 0.5 === value
    })
  }
}

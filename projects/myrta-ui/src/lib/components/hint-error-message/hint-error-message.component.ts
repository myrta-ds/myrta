import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrx-hint-error-message',
  templateUrl: './hint-error-message.component.html',
  styleUrls: ['./hint-error-message.component.less']
})
/**
 * @param message string (text или HTML) <br/>
 * @param value number | string <br/>
 * @param maxValue? number <br/>
 * @param minValue? number <br/>
 * Передается один из параметров: maxValue, minValue, minLength, maxLength
 */
export class HintErrorMessageComponent {
  private _isInit = false
  /**
   * Пример использования <br/>
   * message="Не более {diff} дней" <br/>
   * @param {diff} = maxValue - value
   */
  @Input() public message = '';
  @Input() public value: number | string = 0;
  @Input() public maxValue = 0;
  @Input() public minValue = 0;
  @Input() public minLength = 0;
  @Input() public maxLength = 0;
  @Input() public checkInvalid: boolean | null = true;

  public get replaceMessage(): string {
    if (this.maxValue && this.message.includes('{diff}')) {
      return this.message
        .split('{diff}')
        .join(String(this.maxValue - this.retypeValue(this.value)))
    }

    if (this.minValue && this.message.includes('{diff}')) {
      return this.message
        .split('{diff}')
        .join(
          String(this.value).length < this.minValue ? String(this.minValue - String(this.value).length) : '0'
        )
    }

    if (this.minLength && this.message.includes('{diff}')) {
      return this.message
        .split('{diff}')
        .join(
          String(this.value).length < this.minLength ? String(this.minLength - String(this.value).length) : '0'
        )
    }

    if (this.maxLength && this.message.includes('{diff}')) {
      return this.message
        .split('{diff}')
        .join(String(this.maxLength - String(this.value).length))
    }

    return this.message
  }

  public get getIsInvalid(): boolean {
    if (this.maxValue && this.minValue) {
      if (typeof this.value === 'string' && this.value !== '' && isNaN(parseFloat(this.value))) {
        return true
      }
      if (typeof this.value === 'number' && isNaN(this.value)) {
        return true
      }

      return this.maxValue - this.retypeValue(this.value) < 0 || this.retypeValue(this.value) - this.minValue < 0 ;
    }

    if (this.maxValue && !this.minValue) {
      if (typeof this.value === 'string' && this.value !== '' && isNaN(parseFloat(this.value))) {
        return true
      }
      if (typeof this.value === 'number' && isNaN(this.value)) {
        return true
      }

      return this.maxValue - this.retypeValue(this.value) < 0;
    }

    if (this.minValue && !this.maxValue) {
      if (typeof this.value === 'string' && this.value !== '' && isNaN(parseFloat(this.value))) {
        return true
      }
      if (typeof this.value === 'number' && isNaN(this.value)) {
        return true
      }

      return this.minValue - this.retypeValue(this.value) > 0;
    }

    if (this.maxLength) {
      return this.maxLength - String(this.value).length < 0
    }

    if (this.minLength) {
      return this.minLength - String(this.value).length > 0
    }

    return false
  }

  private retypeValue(value: number | string): number {
    if (typeof value === 'string') {
      if (value === '') {
        return 0
      }
      if (!isNaN(parseFloat(value))) {
        return parseFloat(value)
      }
    } else {
      if (isNaN(value)) {
        return 0
      }
      return Number(value)
    }

    return 0
  }
}

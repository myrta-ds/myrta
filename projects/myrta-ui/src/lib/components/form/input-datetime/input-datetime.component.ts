import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import AirDatepicker from 'air-datepicker'
import { sliceDate, toDate } from '../../../helpers/formatting-date';
import { InputDatetimeSizesEnum, InputDatetimeSizesTypes } from './input-datetime.enum';
import {createPopper} from '@popperjs/core';

export type InputDatetimeValueTypes = string | string[];

@Component({
  selector: 'mrx-input-datetime',
  templateUrl: 'input-datetime.component.html',
  styleUrls: ['input-datetime.components.less'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputDatetimeComponent), multi: true},
  ]
})
export class InputDatetimeComponent implements ControlValueAccessor, AfterViewInit, OnChanges {

  public dt: any
  // public isViewCleanIcon = false
  public value: any = '';
  public selectedDates: any | any[] = []

  private dateFormatInner = 'dd.MM.yyyy';
  private timeFormatInner = 'HH:mm';
  private multipleDatesSeparator = ' - ';

  // SETTINGS DATETIME PICKER
  @Input() public dateFormat = 'dd.MM.yyyy';
  @Input() public timeFormat = 'HH:mm';
  @Input() public dateType: 'ISO' | 'string' | 'date' = 'ISO'
  @Input() public startDate: string | undefined = '';
  @Input() public minDate = '';
  @Input() public maxDate = '';
  @Input() public timepicker = false
  @Input() public rangeMode = false
  @Input() public multiplyMode = false
  @Input() public inline = false
  @Input() public maxlength = 0;

  // CONTENT
  @Input() public container = 'div.page-wrapper';
  @Input() public size: InputDatetimeSizesTypes = 'large';
  @Input() public customClasses = '';
  @Input() public placeholder = '';
  @Input() public name = '';
  @Input() public mask = '';
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public required = false;
  @Input() public isManualInput = true;
  @Input() public autoClose = true;

  // ERROR
  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  @Output() public changed: EventEmitter<string | string[]> = new EventEmitter();
  @Output() public changedDatepicker: EventEmitter<{
    date: Date | Date[],
    formattedDate: string | string[],
    datepicker: AirDatepicker
  }> = new EventEmitter();

  @ViewChild('dateInput') dateInput!: ElementRef;


  ngAfterViewInit(): void {
    const _this = this

    this.dt = new AirDatepicker(this.dateInput.nativeElement, {
      selectedDates: _this.selectedDates,
      locale: {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        clear: 'Очистить',
        dateFormat: this.dateFormat ? this.dateFormat : this.dateFormatInner,
        timeFormat: this.timeFormat ? this.timeFormat : this.timeFormatInner,
        firstDay: 1
      },
      multipleDates: this.multiplyMode,
      timepicker: this.timepicker,
      container: this.container,
      position({$datepicker, $target, $pointer, done}) {
        let popper = createPopper($target, $datepicker, {
          placement: 'bottom-start',
          modifiers: [
            {
              name: 'flip',
              options: {
                padding: {
                  top: 64
                }
              }
            },
            {
              name: 'offset',
              options: {
                offset: [0, 10]
              }
            },
            {
              name: 'arrow',
              options: {
                element: $pointer
              }
            }
          ]
        })

        return function completeHide() {
          popper.destroy();
          done();
        }
      },
      autoClose: this.autoClose,
      minDate: this.minDate ?
        toDate(this.minDate, this.dateFormatInner, this.timeFormatInner) :
        undefined,
      maxDate: this.maxDate ?
        toDate(this.maxDate, this.dateFormatInner, this.timeFormatInner) :
        undefined,
      range: this.rangeMode,
      inline: this.inline,
      multipleDatesSeparator: this.multiplyMode ? ' / ' : this.multipleDatesSeparator,
      onSelect({date, formattedDate, datepicker}) {
        _this.changedDatepicker.emit({date, formattedDate, datepicker})

        if (_this.rangeMode) {
          _this.updateValue(_this.transformStringAndArrayInArray(formattedDate))
        } else {
          _this.updateValue(_this.transformStringAndArrayInArray(formattedDate)[0])
        }
      }
    });
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

  public getClasses(): string {
    return `${InputDatetimeSizesEnum[this.size]} ${this.customClasses} ${this.checkValidClasses}`
  }

  public clickToIconCalendar(): void {
    this.dateInput.nativeElement.focus()
  }

  public clickToIconClear(): void {
    this.dt.clear()
  }

  public get isViewCleanIcon() {
    return !!this.dateInput?.nativeElement.value
  }

  public validateDate(date: Date): boolean {
    const maxDate = toDate(this.maxDate, this.dateFormatInner, this.timeFormatInner)
    const minDate = toDate(this.minDate, this.dateFormatInner, this.timeFormatInner)
    const selectDate = date

    let isValid = true

    if (this.minDate) {
      isValid = selectDate >= minDate
    }

    if (this.maxDate) {
      isValid = selectDate <= maxDate
    }

    return isValid;
  }

  public inputValue($event: any) {
    // проверить и почистить
    // const date = toDate(
    //   $event.target.value,
    //   this.dateFormat ? this.dateFormat : this.dateFormatInner,
    //   this.timeFormat ? this.timeFormat : this.timeFormatInner
    // )
    //
    // if (this.dateInput.nativeElement.value === '') {
    //   return this.dt.clear()
    // }
    //
    // if (this.validateDate(date)) {
    //   this.dt.selectDate(date, {updateTime: true})
    // }
  }

  private onChange = (value: any) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public transformStringAndArrayInArray(value: any): string[] {
    if (typeof value === 'object') {
      return value.map((str: string) => {
        return toDate(str, this.dateFormatInner, this.timeFormatInner).toISOString()
      })
    } else if (typeof value === 'string') {
      return [toDate(value, this.dateFormatInner, this.timeFormatInner).toISOString()]
    }

    return ['']
  }

  public transformToDate(array: string[]) {
    return array.map(str => {
      return toDate(str, this.dateFormatInner, this.timeFormatInner)
    })
  }

  public writeValue(outsideValue: any) {
    this.value = outsideValue ? outsideValue : '';

    if (outsideValue) {
      this.selectedDates = this.transformStringAndArrayInArray(outsideValue)
    } else if (this.dateInput) {
      this.selectedDates = []
    }

    if (this.dt) {
      this.dt.selectDate(this.transformToDate(this.selectedDates), {silent: true})
    }
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public validateDataValue(value: string) {
    if (this.rangeMode) {
      const dates = value.split('-')
      const newDateArray: any[] = []

      let isValid = true

      dates.forEach(valueDate => {

        const isTimepicker = this.timepicker ? 16 : 10

        if (valueDate.trim().length === isTimepicker) {
          let sliceValue = sliceDate(valueDate.trim(), this.dateFormatInner, this.timeFormatInner)
          let viewDate = this.dt.viewDate;

          viewDate.setDate(sliceValue.day);
          viewDate.setMonth(sliceValue.month - 1);
          viewDate.setFullYear(sliceValue.year);
          viewDate.setHours(sliceValue.hour);
          viewDate.setMinutes(sliceValue.minute);

          newDateArray.push(new Date(viewDate))
        } else {
          isValid = false
        }
      })

      if (isValid) {
        this.dt.selectDate([newDateArray], {updateTime: this.timepicker, silent: true})
        this.dt.update({timepicker: this.timepicker, newDateArray})
        this.updateValue(newDateArray.map(date => date.toISOString()))
      }
    } else if (this.multiplyMode) {
      const dates = value.split(' / ')
      const newDateArray: any[] = []

      let isValid = true

      dates.forEach(valueDate => {

        const isTimepicker = this.timepicker ? 16 : 10

        if (valueDate.length === isTimepicker) {
          let sliceValue = sliceDate(valueDate.trim(), this.dateFormatInner, this.timeFormatInner)
          let viewDate = this.dt.viewDate;

          viewDate.setDate(sliceValue.day);
          viewDate.setMonth(sliceValue.month - 1);
          viewDate.setFullYear(sliceValue.year);
          viewDate.setHours(sliceValue.hour);
          viewDate.setMinutes(sliceValue.minute);

          newDateArray.push(new Date(viewDate))
        } else {
          isValid = false
        }
      })

      if (isValid) {
        this.dt.selectDate([newDateArray], {updateTime: this.timepicker, silent: true})
        this.dt.update({timepicker: this.timepicker, newDateArray})
        this.updateValue(newDateArray.map(date => date.toISOString()))
      }
    } else {
      const isTimepicker = this.timepicker ? 16 : 10

      if (value.length === isTimepicker) {
        let sliceValue = sliceDate(value, this.dateFormatInner, this.timeFormatInner)
        let viewDate = this.dt.viewDate;

        viewDate.setDate(sliceValue.day);
        viewDate.setMonth(sliceValue.month - 1);
        viewDate.setFullYear(sliceValue.year);
        viewDate.setHours(sliceValue.hour);
        viewDate.setMinutes(sliceValue.minute);

        this.dt.selectDate([viewDate], {updateTime: this.timepicker})
        this.dt.update({timepicker: this.timepicker, viewDate})
      }
    }

    if (value === '') {
      this.dt.clear()
    }
  }

  public updateValue(insideValue: string | string[]) {
    this.changed.emit(insideValue)
    this.onChange(insideValue)
    this.onTouched();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dt) {
      if (changes['maxDate']) {
        this.dt.update({maxDate: this.maxDate})
      } else if (changes['minDate']) {
        this.dt.update({minDate: this.minDate})
      }
    }
  }
}

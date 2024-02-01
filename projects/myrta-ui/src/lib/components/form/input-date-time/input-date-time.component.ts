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
import {
  ExtraTime,
  InputDateSizesEnum,
  InputDateSizesTypes,
  InputDateTimeValueTypes,
  InputDateTimeValueWithId
} from './input-date-time.enum';
import { DateModel, TimeModel, validateDateModel, validateTimeModel } from './helpers/validate-value-models';
import { dateModelConstant, timeModelConstant } from './constants/value-models';
import { dateModelValueParse, timeModelValueParse } from './helpers/value-parser';
import { markPosition } from './helpers/cursor-position';
import { cleanDate } from './helpers/clean-date';
import { formattingToMoscowTimezone } from './helpers/formatting-moscow-timezone';
import { TimezoneType } from './enum/timezone';
import { formattingFromModels } from './helpers/formatting-from-models';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'mrx-input-date-time',
  templateUrl: 'input-date-time.component.html',
  styleUrls: ['input-date-time.components.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputDateTimeComponent), multi: true}
  ]
})
export class InputDateTimeComponent implements ControlValueAccessor, OnChanges, AfterViewInit {
  public dt: any
  public value: any = '';
  public dateModel: DateModel = dateModelConstant
  public timeModel: TimeModel = timeModelConstant

  public innerInvalid = false;
  public innerInvalidMessage = '';

  // SAVE STATE
  public uuid: string = uuidv4()
  @Input() public fields: Field[] = [];

  @Input() public size: InputDateSizesTypes = 'large';
  @Input() public customClasses = '';
  @Input() public dateLabel = '';
  @Input() public timeLabel = '';
  @Input() public datePlaceholder = 'дд.мм.гггг';
  @Input() public timePlaceholder = '00:00';
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public required = false;
  @Input() public timepicker = false
  @Input() public minDate = '';
  @Input() public maxDate = '';
  @Input() public timezone: TimezoneType = 'default';
  @Input() public inline = false
  @Input() public addMinTime = false
  @Input() public addMaxTime = false
  @Input() public addMinTimeObj!: ExtraTime
  @Input() public addMaxTimeObj!: ExtraTime

  @Input() public disableValidate = false

  @Input() public container = 'div.page-wrapper';

  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  @ViewChild('dateInput') dateInput!: ElementRef;
  @ViewChild('timeInput') timeInput!: ElementRef;

  @Output() public changed: EventEmitter<string> = new EventEmitter();
  @Output() public modelChange: EventEmitter<InputDateTimeValueWithId> = new EventEmitter<InputDateTimeValueWithId>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.dt = new AirDatepicker(this.dateInput.nativeElement, {
      container: this.container,
      locale: {
        dateFormat: 'dd.MM.yyyy',
        timeFormat: 'HH:mm',
      },
      autoClose: true,
      multipleDatesSeparator: ' - ',
      timepicker: this.timepicker,
      minDate: this.minDate,
      maxDate: this.maxDate,
      inline: this.inline,
      position({ $datepicker, $target, $pointer, done }) {
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
        });

        return function completeHide() {
          popper.destroy();
          done();
        };
      },
      onSelect: ({date, formattedDate, datepicker}) => {

        if (date instanceof Date && typeof formattedDate === 'string') {
          this.dateModel = validateDateModel(formattedDate)
          this.timeModel = validateTimeModel(formattedDate)

          this._checkExtraTime()

          if (this.isValidModels) {
            this.updateValueModel(this.dateModel, this.timeModel)
          }
        }
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dt && !this.disableValidate) {
      if (changes['maxDate']) {
        const invalid = this.innerInvalid
        this.dt.update({maxDate: this.maxDate})
        this.value && this.dt.selectDate(dayjs(this.value).toDate(), {updateTime: this.timepicker, silent: true})
        const isValid = this.checkingInvalid(this.value, this.maxDate, this.minDate)

        if (invalid && isValid) {
          setTimeout(() => {
            this.updateValueModel(this.dateModel, this.timeModel)
          }, 0)
        }
      } else if (changes['minDate']) {
        const invalid = this.innerInvalid
        this.dt.update({minDate: this.minDate})
        this.value && this.dt.selectDate(dayjs(this.value).toDate(), {updateTime: this.timepicker, silent: true})
        const isValid = this.checkingInvalid(this.value, this.maxDate, this.minDate)

        if (invalid && isValid) {
          setTimeout(() => {
            this.updateValueModel(this.dateModel, this.timeModel)
          }, 0)
        }
      }
    }
  }

  public get getDateValue(): string {
    return `${this.dateModel.view}${this.timeModel.view ? ' ' + this.timeModel.view : ''}`
  }

  public get getClasses(): string {
    return `${InputDateSizesEnum[this.size]} ${this.customClasses} ${this.checkValidClasses}`
  }

  private get isValidModels(): boolean {
    return !this.dateModel.invalid && (this.timepicker ? !this.timeModel.invalid : true)
  }

  public get isViewCleanIcon() {
    return !!this.dateInput?.nativeElement.value
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : ''
  }

  private _checkExtraTime() {
    if (this.addMaxTime && !this.timepicker) {
      this.timeModel.hour = '23'
      this.timeModel.minute = '59'
    }
    if (this.addMinTime && !this.timepicker) {
      this.timeModel.hour = '00'
      this.timeModel.minute = '00'
    }
    if (this.addMaxTimeObj && !this.timepicker) {
      this.timeModel.hour = this.addMaxTimeObj.hour
      this.timeModel.minute = this.addMaxTimeObj.minute
    }
    if (this.addMinTimeObj && !this.timepicker) {
      this.timeModel.hour = this.addMinTimeObj.hour
      this.timeModel.minute = this.addMinTimeObj.minute
    }
  }

  public clickToIconCalendar(): void {
    this.dateInput.nativeElement.focus()
  }

  public clickToIconClear(): void {
    this.dt.setViewDate(new Date())
    this.dt && this.dt.clear()
    this.dateModel = dateModelConstant
    this.timeModel = timeModelConstant
    this.updateValue('')
    this.innerInvalid = false
    this.innerInvalidMessage = ''
  }

  private updateValueModel(dateModel: DateModel, timeModel: TimeModel, bol: boolean = false) {
    if (dateModel.view === '') {
      this.clickToIconClear()
    } else {
      const date = formattingFromModels(dateModel, timeModel, this.timepicker || this.addMaxTime || this.addMinTime)

      const formattingDate = formattingToMoscowTimezone(date.toISOString(), this.timezone)

      const isValid = this.checkingInvalid(formattingDate, this.maxDate, this.minDate)

      if (date.isValid() && isValid) {
        this.dt.selectDate(formattingFromModels(dateModel, timeModel, this.timepicker).toISOString(), {
          updateTime: this.timepicker,
          silent: true
        })
        this.dt.setViewDate(formattingFromModels(dateModel, timeModel, this.timepicker).toISOString())
        this.updateValue(formattingDate)
      }
    }
  }

  private dateFormattingOutput(value: Date): string {
    if (value) {
      return dayjs(value).toISOString()
    } else {
      return ''
    }
  }

  private invalidMessageOn(message: string): void {
    this.innerInvalid = true
    this.innerInvalidMessage = message
  }

  private invalidMessageOff(): void {
    this.innerInvalid = false
    this.innerInvalidMessage = ''
  }

  public updateDateValue(dateInput: HTMLInputElement): void {
    const selectionStart = dateInput.selectionStart
    this.dateModel = validateDateModel(dateInput.value)
    this.timeModel = validateTimeModel(dateInput.value)

    dateInput.value = this.getDateValue
    dateInput.selectionStart = selectionStart
    dateInput.selectionEnd = dateInput.selectionStart

    this._checkExtraTime()

    if (this.isValidModels || this.dateModel.view === '') {
      this.updateValueModel(this.dateModel, this.timeModel)
    }
  }

  public clickToInput(input: HTMLInputElement): void {
    if (input.selectionStart === input.selectionEnd && (input.selectionStart && input.selectionStart > 0)) {
      const {start, end} = markPosition(input.selectionStart, input.selectionEnd)
      input.selectionStart = start
      input.selectionEnd = end
    }
  }

  private checkingInvalid(value: string, maxDate: string, minDate: string) {
    if (this.disableValidate) {
      this.invalidMessageOff()
      return true
    }
    if (maxDate && (dayjs(value).diff(dayjs(maxDate)) === 0)) {
      this.invalidMessageOn('Дата и время окончания не может быть равна дате и времени начала')
      return false
    } else if (maxDate && (dayjs(value).diff(dayjs(maxDate)) > 0)) {
      this.invalidMessageOn('Дата окончания не может быть раньше даты начала')
      return false
    } else if (minDate && (dayjs(value).diff(dayjs(minDate)) === 0)) {
      this.invalidMessageOn('Дата и время окончания не может быть равна дате и времени начала')
      return false
    } else if (minDate && dayjs(value).diff(dayjs(minDate)) < 0) {
      this.invalidMessageOn('Дата окончания не может быть раньше даты начала')
      return false
    } else {
      this.invalidMessageOff()
      return true
    }
  }

  public writeValue(outsideValue: InputDateTimeValueTypes) {
    if (outsideValue) {
      this.value = cleanDate(outsideValue);
      this.dateModel = dateModelValueParse(outsideValue, this.timezone)
      this.timeModel = timeModelValueParse(outsideValue, this.timezone)

      this.checkingInvalid(outsideValue, this.maxDate, this.minDate)

      this.dt.selectDate(formattingFromModels(this.dateModel, this.timeModel, this.timepicker).toISOString(), {
        updateTime: this.timepicker,
        silent: true
      })
      this.dt.setViewDate(formattingFromModels(this.dateModel, this.timeModel, this.timepicker).toISOString())
    } else {
      if (this.dt) {
        this.dt.clear()
      }
    }
  }

  private onChange = (value: any) => {
  };
  private onTouched = () => {
  };

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public updateValue(insideValue: InputDateTimeValueTypes) {
    this.value = insideValue
    this.changed.emit(insideValue);
    this.modelChange.emit({value: insideValue, id: this.uuid})
    this.onChange(insideValue);
    this.onTouched();
  }
}

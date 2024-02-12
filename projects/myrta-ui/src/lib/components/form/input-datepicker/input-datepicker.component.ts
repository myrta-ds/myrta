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
import AirDatepicker from 'air-datepicker';
import {
  InputDateSizesEnum,
  InputDateSizesTypes, InputDateTimeValidation,
  InputDateTimeValueTypes,
  InputDateTimeValueWithId
} from './input-datepicker.enum';
import { DateModel, TimeModel, validateDateModel, validateTimeModel } from './helpers/validate-value-models';
import { dateModelConstant, timeModelConstant } from './constants/value-models';
import { dateModelValueParse, timeModelValueParse } from './helpers/value-parser';
import { markPosition } from './helpers/cursor-position';
import { cleanDate } from './helpers/clean-date';
import { getDateDayjsObject } from './helpers/get-date-dayjs-object';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
import localeEn from 'air-datepicker/locale/en';
import localeRu from 'air-datepicker/locale/ru';
import { Field } from '../../../services';
import { getDateObject } from './helpers/get-date-object';

@Component({
  selector: 'mrx-input-datepicker',
  templateUrl: 'input-datepicker.component.html',
  styleUrls: ['input-datepicker.components.less'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputDatepickerComponent), multi: true }
  ]
})
export class InputDatepickerComponent implements ControlValueAccessor, OnChanges, AfterViewInit {
  public dt: any;
  public value: any = '';
  public dateModel: DateModel = dateModelConstant;
  public timeModel: TimeModel = timeModelConstant;

  public innerInvalid = false;
  public innerInvalidMessage = '';

  // SAVE STATE
  public uuid: string = uuidv4();
  @Input() public fields: Field[] = [];

  @Input() public size: InputDateSizesTypes = 'large';
  @Input() public format = 'YYYY-MM-DD HH:mm';
  @Input() public locale: 'ru' | 'en' = 'ru';
  @Input() public customClasses = '';
  @Input() public dateLabel = '';
  @Input() public timeLabel = '';
  @Input() public datePlaceholder = 'дд.мм.гггг';
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public required = false;
  @Input() public timepicker = false;
  @Input() public minDate = '';
  @Input() public maxDate = '';
  @Input() public inline = false;
  @Input() public closable = true;

  @Input() public leadZeroDateTime = false;
  @Input() public mask = '00.00.0000 00:m0';

  @Input() public container = 'div.page-wrapper';

  @Input() public validationType: InputDateTimeValidation = 'default';
  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  @Input() public isShowMessages = true;

  @ViewChild('dateInput') dateInput!: ElementRef;

  @Output() public changed: EventEmitter<string> = new EventEmitter();
  @Output() public modelChange: EventEmitter<InputDateTimeValueWithId> = new EventEmitter<InputDateTimeValueWithId>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.dt = new AirDatepicker(this.dateInput.nativeElement, {
      container: this.container,
      locale: this.getLocale,
      autoClose: true,
      multipleDatesSeparator: ' - ',
      timepicker: this.timepicker,
      minDate: this.minDate ? dayjs(this.minDate, this.format).toDate() : '',
      maxDate: this.maxDate ? dayjs(this.maxDate, this.format).toDate() : '',
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
      onSelect: ({ date, formattedDate, datepicker }) => {

        if (date instanceof Date && typeof formattedDate === 'string') {
          this.dateModel = validateDateModel(formattedDate);
          this.timeModel = validateTimeModel(formattedDate);

          if (this.isValidModels) {
            this.updateValueModel(this.dateModel, this.timeModel);
          }
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dt) {
      if (changes['maxDate']) {
        if (this.validationType === 'double') {
          const invalid = this.innerInvalid;
          this.dt.update({ maxDate: this.maxDate ? dayjs(this.maxDate, this.format).toDate() : '' });
          this.value && this.dt.selectDate(dayjs(this.value, this.format).toDate(), { updateTime: this.timepicker, silent: true });
          const isValid = this.checkingInvalid(this.value, this.maxDate, this.minDate);

          if (invalid && isValid) {
            setTimeout(() => {
              this.updateValueModel(this.dateModel, this.timeModel);
            }, 0);
          }
        } else {
          // console.log(changes['maxDate']);
        }
      } else if (changes['minDate']) {
        if (this.validationType === 'double') {
          const invalid = this.innerInvalid;
          this.dt.update({ minDate: this.minDate ? dayjs(this.minDate, this.format).toDate() : '' });
          this.value && this.dt.selectDate(dayjs(this.value, this.format).toDate(), { updateTime: this.timepicker, silent: true });
          const isValid = this.checkingInvalid(this.value, this.maxDate, this.minDate);

          if (invalid && isValid) {
            setTimeout(() => {
              this.updateValueModel(this.dateModel, this.timeModel);
            }, 0);
          }
        } else {
          // console.log(changes['minDate']);
        }
      }
    }
  }

  public get getDateValue(): string {
    return `${this.dateModel.view}${this.timepicker && this.timeModel.view ? ' ' + this.timeModel.view : ''}`;
  }

  public get getClasses(): string {
    return `${InputDateSizesEnum[this.size]} ${this.customClasses} ${this.checkValidClasses}`;
  }

  private get isValidModels(): boolean {
    return !this.dateModel.invalid && (this.timepicker ? !this.timeModel.invalid : true);
  }

  public get isViewCleanIcon() {
    return !!this.dateInput?.nativeElement.value && this.closable;
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : '';
  }

  private get getLocale() {
    return this.locale === 'ru' ? { ...localeRu, dateFormat: 'dd.MM.yyyy', timeFormat: 'HH:mm' } : { ...localeEn, dateFormat: 'dd.MM.yyyy', timeFormat: 'HH:mm' }
  }

  public clickToIconCalendar(): void {
    this.dateInput.nativeElement.focus();
  }

  public clickToIconClear(): void {
    this.dt.setViewDate(new Date());
    this.dt && this.dt.clear();
    this.dateModel = dateModelConstant;
    this.timeModel = timeModelConstant;
    this.updateValue('');
    this.innerInvalid = false;
    this.innerInvalidMessage = '';
  }

  private updateValueModel(dateModel: DateModel, timeModel: TimeModel, bol: boolean = false) {
    if (dateModel.view === '') {
      this.clickToIconClear();
    } else {
      const date = getDateDayjsObject(dateModel, timeModel, this.timepicker);
      const formattingDate = date.format(this.format);
      const isValid = this.checkingInvalid(formattingDate, this.maxDate, this.minDate);

      if (date.isValid() && isValid) {
        this.dt.selectDate(getDateObject(dateModel, timeModel, this.timepicker), {
          updateTime: this.timepicker,
          silent: true
        });
        this.dt.setViewDate(getDateObject(dateModel, timeModel, this.timepicker));
        this.updateValue(formattingDate);
      }
    }
  }

  private invalidMessageOn(message: string): void {
    this.innerInvalid = true;
    this.innerInvalidMessage = message;
  }

  private invalidMessageOff(): void {
    this.innerInvalid = false;
    this.innerInvalidMessage = '';
  }

  public updateDateValue(dateInput: HTMLInputElement): void {
    const selectionStart = dateInput.selectionStart;
    this.dateModel = validateDateModel(dateInput.value);
    this.timeModel = validateTimeModel(dateInput.value);

    dateInput.value = this.getDateValue;
    dateInput.selectionStart = selectionStart;
    dateInput.selectionEnd = dateInput.selectionStart;

    if (this.isValidModels || this.dateModel.view === '') {
      this.updateValueModel(this.dateModel, this.timeModel);
    }
  }

  public clickToInput(input: HTMLInputElement): void {
    if (input.selectionStart === input.selectionEnd && (input.selectionStart && input.selectionStart > 0)) {
      const { start, end } = markPosition(input.selectionStart, input.selectionEnd);
      input.selectionStart = start;
      input.selectionEnd = end;
    }
  }

  private checkingInvalid(value: string, maxDate: string, minDate: string) {
    if (!this.isShowMessages) {
      this.invalidMessageOff();
      return true
    }

    if (maxDate && (dayjs(value, this.format).diff(dayjs(maxDate, this.format)) === 0)) {
      this.invalidMessageOn('Дата и время окончания не может быть равна дате и времени начала');
      return false;
    } else if (maxDate && (dayjs(value, this.format).diff(dayjs(maxDate, this.format)) > 0)) {
      this.invalidMessageOn('Дата окончания не может быть раньше даты начала');
      return false;
    } else if (minDate && (dayjs(value, this.format).diff(dayjs(minDate, this.format)) === 0)) {
      this.invalidMessageOn('Дата и время окончания не может быть равна дате и времени начала');
      return false;
    } else if (minDate && dayjs(value, this.format).diff(dayjs(minDate, this.format)) < 0) {
      this.invalidMessageOn('Дата окончания не может быть раньше даты начала');
      return false;
    } else {
      this.invalidMessageOff();
      return true;
    }
  }

  public writeValue(outsideValue: InputDateTimeValueTypes) {
    if (outsideValue) {
      this.value = cleanDate(outsideValue, this.format);

      this.dateModel = dateModelValueParse(outsideValue, this.format);
      this.timeModel = timeModelValueParse(outsideValue, this.format);

      this.checkingInvalid(outsideValue, this.maxDate, this.minDate);

      this.dt.selectDate(getDateObject(this.dateModel, this.timeModel, this.timepicker), { updateTime: this.timepicker, silent: true });
      this.dt.setViewDate(getDateObject(this.dateModel, this.timeModel, this.timepicker));
    } else {
      if (this.dt) {
        this.dt.clear();
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
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.modelChange.emit({value: insideValue, id: this.uuid})
    this.onChange(insideValue);
    this.onTouched();
  }
}

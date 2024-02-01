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
  InputDateSizesTypes,
  InputDateTimeValueTypes,
  InputDateTimeValueWithId
} from './input-timepicker.enum';
import { TimeModel, validateTimeModel } from './helpers/validate-value-models';
import { timeModelConstant } from './constants/value-models';
import { timeModelValueParse } from './helpers/value-parser';
import { markPosition } from './helpers/cursor-position';
import { cleanDate } from './helpers/clean-date';
import { getDateDayjsObject } from './helpers/get-date-dayjs-object';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
import { Field } from '../../../services';
import { getDateObject } from './helpers/get-date-object';

@Component({
  selector: 'mrx-input-timepicker',
  templateUrl: 'input-timepicker.component.html',
  styleUrls: ['input-timepicker.components.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputTimepickerComponent), multi: true }
  ]
})
export class InputTimepickerComponent implements ControlValueAccessor, OnChanges, AfterViewInit {
  public dt: any;
  public value: any = '';
  public timeModel: TimeModel = timeModelConstant;

  public innerInvalid = false;
  public innerInvalidMessage = '';

  // SAVE STATE
  public uuid: string = uuidv4();
  @Input() public fields: Field[] = [];

  @Input() public size: InputDateSizesTypes = 'large';
  @Input() public format = 'HH:mm';
  @Input() public customClasses = '';
  @Input() public placeholder = '00:00';
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public required = false;
  @Input() public minValue = '';
  @Input() public maxValue = '';
  @Input() public inline = false;
  @Input() public closable = true;

  @Input() public leadZeroDateTime = false;
  @Input() public mask = '00:m0';

  @Input() public container = 'div.page-wrapper';

  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  @ViewChild('dateInput') dateInput!: ElementRef;

  @Output() public changed: EventEmitter<string> = new EventEmitter();
  @Output() public modelChange: EventEmitter<InputDateTimeValueWithId> = new EventEmitter<InputDateTimeValueWithId>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.dt = new AirDatepicker(this.dateInput.nativeElement, {
      container: this.container,
      locale: {
        timeFormat: this.format,
      },
      autoClose: true,
      timepicker: true,
      onlyTimepicker: true,
      minDate: this.minValue ? dayjs(this.minValue, this.format).toDate() : '',
      maxDate: this.maxValue ? dayjs(this.maxValue, this.format).toDate() : '',
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
          this.timeModel = validateTimeModel(formattedDate);

          if (this.isValidModels) {
            this.updateValueModel(this.timeModel);
          }
        }
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.dt) {
      if (changes['maxValue']) {
        this.maxValue = changes['maxValue'].currentValue
        this.dt.update({ maxDate: this.maxValue ? dayjs(this.maxValue, this.format).toDate() : '' });
      } else if (changes['minValue']) {
        this.minValue = changes['minValue'].currentValue
        this.dt.update({ minDate: this.minValue ? dayjs(this.minValue, this.format).toDate() : '' });
      }
    }
  }

  public get getDateValue(): string {
    return `${this.timeModel.view}`;
  }

  public get getClasses(): string {
    return `${InputDateSizesEnum[this.size]} ${this.customClasses} ${this.checkValidClasses}`;
  }

  private get isValidModels(): boolean {
    return !this.timeModel.invalid
  }

  public get isViewCleanIcon() {
    return !!this.dateInput?.nativeElement.value && this.closable;
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : '';
  }

  public clickToIconCalendar(): void {
    this.dateInput.nativeElement.focus();
  }

  public clickToIconClear(): void {
    this.dt.setViewDate(new Date());
    this.dt && this.dt.clear();
    this.timeModel = timeModelConstant;
    this.updateValue('');
    this.innerInvalid = false;
    this.innerInvalidMessage = '';
  }

  private updateValueModel(timeModel: TimeModel, bol: boolean = false) {
    if (timeModel.view === '') {
      this.clickToIconClear();
    } else {
      const date = getDateDayjsObject(timeModel);
      const formattingDate = date.format(this.format);
      const isValid = this.checkingInvalid(formattingDate, this.maxValue, this.minValue);

      if (date.isValid() && isValid) {
        this.dt.selectDate(getDateObject(timeModel), {
          updateTime: true,
          silent: true
        });
        this.dt.setViewDate(getDateObject(timeModel));
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
    this.timeModel = validateTimeModel(dateInput.value);

    if (this.isValidModels || this.timeModel.view === '') {
      this.updateValueModel(this.timeModel);
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
    // if (maxDate && (dayjs(value).diff(dayjs(maxDate)) === 0)) {
    //   // this.invalidMessageOn('Дата и время окончания не может быть равна дате и времени начала');
    //   // return false;
    // } else if (maxDate && (dayjs(value).diff(dayjs(maxDate)) > 0)) {
    //   // this.invalidMessageOn('Дата окончания не может быть раньше даты начала');
    //   // return false;
    // } else if (minDate && (dayjs(value).diff(dayjs(minDate)) === 0)) {
    //   // this.invalidMessageOn('Дата и время окончания не может быть равна дате и времени начала');
    //   // return false;
    // } else if (minDate && dayjs(value).diff(dayjs(minDate)) < 0) {
    //   // this.invalidMessageOn('Дата окончания не может быть раньше даты начала');
    //   // return false;
    // } else {
    //   // this.invalidMessageOff();
    //   // return true;
    // }
    this.invalidMessageOff();
    return true;
  }

  public writeValue(outsideValue: InputDateTimeValueTypes) {
    if (outsideValue) {
      this.value = cleanDate(outsideValue, this.format);

      this.timeModel = timeModelValueParse(outsideValue, this.format);

      this.checkingInvalid(outsideValue, this.maxValue, this.minValue);

      this.dt.selectDate(getDateObject(this.timeModel), { updateTime: true, silent: true });
      this.dt.setViewDate(getDateObject(this.timeModel));
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

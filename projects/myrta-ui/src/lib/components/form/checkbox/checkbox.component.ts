import {
  AfterViewInit, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  CheckboxTypes,
  CheckboxTypesEnum,
  CheckboxValueTypes, CheckboxValueWithId,
} from './checkbox.enum';
import { TooltipService } from '../../tooltip/services/tooltip.service';
import { v4 as uuid } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TooltipService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  public value: CheckboxValueTypes = false;
  public isEmptyLabel = true;

  private _tooltip = '';
  private _tooltipInitialVisible = false;
  private _isSaveToStorage = false;

  // SAVE STATE
  public uuid: string = uuid()
  @Input() public fields: Field[] = [];

  @Input() public required = false;
  @Input() public type: CheckboxTypes = 'default';
  @Input() public boldLabel = false;
  @Input() public indeterminate = false;
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public placeholder = '';
  @Input() public label = '';
  @Input() public customClasses = '';
  @Input() public customWrapperClasses = '';

  @Input() public invalid = false;
  @Input() public checkInvalid: true | false | null = null;

  @Input()
  set tooltip(tooltip: string) {
    this._tooltip = tooltip;
    this.tooltipService.setTooltip = tooltip;
  }

  @Input()
  set tooltipInitialVisible(value: boolean) {
    this._tooltipInitialVisible = value;
    this.tooltipService.toggleTooltipVisibleFromCode(value);
  }

  @Input()
  set isSaveToStorage(value: boolean) {
    this._isSaveToStorage = value;
    this.tooltipService.setSaveToStorage = value;
  }

  @ViewChild('input') input!: ElementRef;
  @ViewChild('labelContent') labelContent!: ElementRef;

  @Output() public changed: EventEmitter<CheckboxValueTypes> = new EventEmitter<CheckboxValueTypes>();
  @Output() public modelChange: EventEmitter<CheckboxValueWithId> = new EventEmitter<CheckboxValueWithId>();

  constructor(
    public tooltipService: TooltipService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.isEmptyLabel = !this.labelContent.nativeElement.innerText.length;

    this.changeDetection.detectChanges();
  }

  public get getWrapperClasses(): string {
    return `${this.customWrapperClasses}`;
  }

  public get getClasses(): string {
    return `${CheckboxTypesEnum[this.type]} ${this.customClasses} ${this.checkValidClasses}`;
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : ''
  }

  private onChange = (value: CheckboxValueTypes) => {
  };
  private onTouched = () => {
  };

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: CheckboxValueTypes) {
    this.value = outsideValue;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public updateValue(insideValue: CheckboxValueTypes) {
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.modelChange.emit({value: insideValue, id: this.uuid})
    this.onChange(insideValue);
    this.onTouched();
  }

  ngOnInit() {
    this.tooltipService.initTooltip(this._tooltip, this._tooltipInitialVisible);
  }
}







































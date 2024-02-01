import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  SwitchSizeEnum,
  SwitchSizeTypes,
  SwitchTypeEnum,
  SwitchTypeTypes,
  SwitchValueTypes,
  SwitchValueWithId
} from './switch.enum';
import { v4 as uuidv4 } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  public value: SwitchValueTypes = false;

  // SAVE STATE
  public uuid: string = uuidv4()
  @Input() public fields: Field[] = [];

  @Input() public size: SwitchSizeTypes = 'large';
  @Input() public type: SwitchTypeTypes = 'default';
  @Input() public label = '';
  @Input() public boldLabel = false;
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public required = false;
  @Input() public customClasses = '';
  @Input() public leftText = 'Отключить';
  @Input() public rightText = 'Включить';

  @Output() public changed: EventEmitter<SwitchValueTypes> = new EventEmitter<SwitchValueTypes>();
  @Output() public modelChange: EventEmitter<SwitchValueWithId> = new EventEmitter<SwitchValueWithId>();

  public get getClasses(): string {
    return `${SwitchSizeEnum[this.size]} ${SwitchTypeEnum[this.type]} ${this.customClasses}`;
  }

  private onChange = (value: SwitchValueTypes) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: SwitchValueTypes) {
    this.value = outsideValue;
  }

  public setDisabledState(isDisabled: boolean) {
    // this.disabled = isDisabled;
  }

  public updateValue(insideValue: SwitchValueTypes) {
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.modelChange.emit({value: insideValue, id: this.uuid})
    this.onChange(insideValue);
    this.onTouched();
  }
}

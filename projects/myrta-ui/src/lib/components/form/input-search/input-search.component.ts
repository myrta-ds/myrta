import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSearchSizesEnum, InputSearchSizesTypes } from './input-search.enum';

export type InputSearchValueTypes = string;

@Component({
  selector: 'mrx-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true,
    },
  ],
})
export class InputSearchComponent implements ControlValueAccessor {
  public value: InputSearchValueTypes = '';
  public selectionStart: number | undefined;
  public selectionEnd: number | undefined;

  @ViewChild('inputElement') inputElement!: ElementRef;

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
  @Input() public mask = '';
  @Input() public size: InputSearchSizesTypes = 'large';

  @Output() public changed: EventEmitter<InputSearchValueTypes> = new EventEmitter<InputSearchValueTypes>();
  @Output() public cleared: EventEmitter<null> = new EventEmitter<null>();
  @Output() public searched: EventEmitter<null> = new EventEmitter<null>();

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
    return `${InputSearchSizesEnum[this.size]} ${this.customClasses} ${this.readonlyClass} ${this.checkValidClasses}`;
  }

  public get isShowCloseIcon(): boolean {
    return this.value !== '' && this.value !== undefined
  }

  public onClear(): void {
    this.updateValue('')
    setTimeout(() => {
      this.cleared.emit()
    }, 0)
  }

  public onSearch(): void {
    this.searched.emit()
  }

  public insertPositionText(tagText: string): void {
    if (this.selectionStart && this.selectionEnd) {
      const firstText = this.value.substring(0, this.selectionStart) + tagText;
      const secondText = this.value.substring(this.selectionEnd);
      const text = firstText + secondText;

      this.updateValue(text);

      setTimeout(() => {
        this.inputElement.nativeElement.selectionStart = firstText.length;
        this.inputElement.nativeElement.selectionEnd = firstText.length;
        this.inputElement.nativeElement.focus();
      }, 0);
    }
  }

  protected baseValidate(): boolean {
    if (this.minlength) {
      return !!this.value && this.value.length >= this.minlength;
    }
    return true;
  }

  public updateSelection(event: any) {
    this.selectionStart = event.target.selectionStart;
    this.selectionEnd = event.target.selectionEnd;
  }

  private onChange = (value: InputSearchValueTypes) => {};
  private onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(outsideValue: InputSearchValueTypes) {
    this.value = outsideValue;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  public updateValue(insideValue: InputSearchValueTypes) {
    this.value = insideValue;
    this.changed.emit(insideValue);
    this.onChange(insideValue);
    this.onTouched();
  }
}

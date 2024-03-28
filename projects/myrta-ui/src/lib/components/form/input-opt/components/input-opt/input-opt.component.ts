import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter, HostListener, Input, OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChildren
} from '@angular/core';
import { AbstractControl, FormArray, FormControl, Validators } from '@angular/forms';
import { NgxOtpBehavior, NgxOtpInputConfig, NgxOtpStatus } from '../../models/input-opt.model';
import { Subscription } from 'rxjs';
import { InputOptService } from '../../services/input-opt.service';
import { InputOptSizesEnum, InputOptSizesTypes } from "./input-opt.enum";

@Component({
  selector: 'mrx-input-opt',
  templateUrl: './input-opt.component.html',
  styleUrls: ['./input-opt.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputOptComponent implements OnInit, AfterViewInit, OnDestroy {
  private defaultPattern = /^.+$/;
  private DEFAULT_ARIA_LABEL = 'One time password input';
  private LAST_INPUT_INDEX!: number;
  private inputs!: HTMLInputElement[];
  private isNgxOtpArrayDisabled = false;
  private ngxOtpArray$!: Subscription;
  private focusedInputHasValue = false;
  private isInit = false

  ngxOtpArray = new FormArray([]);
  ariaLabels: string[] = [];
  pattern!: RegExp;
  styles: string[][] = [];

  otpConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    autoblur: true,
    behavior: NgxOtpBehavior.DEFAULT,
    pattern: this.defaultPattern,
    classList: {
      container: '',
      inputBox: '',
      input: '',
      inputFilled: '',
      inputDisabled: '',
      inputSuccess: '',
      inputError: '',
    }
  };

  @Input() public size: InputOptSizesTypes = 'large'
  @Input() public customClasses = '';
  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  @Input() set disable(isDisabled: boolean) {
    this.handleDisable(isDisabled);
    this.isNgxOtpArrayDisabled = isDisabled;
  }

  @Input() set config(c: NgxOtpInputConfig) {
    this.otpConfig = { ...this.otpConfig, ...c };
    if (this.otpConfig.classList?.input) {
      this.setInitialStyles();
    }
    if (!c.pattern) {
      this.otpConfig.pattern = this.defaultPattern;
    }
  }

  @Input() set status(status: NgxOtpStatus) {
    this.handleStatusChange(status);
  }

  @ViewChildren('otpInputElement') otpInputElements!: QueryList<ElementRef>;

  @Output() change: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() fillChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private readonly otpService: InputOptService,
    private readonly ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.setUpOtpForm();
    this.setUpAriaLabels();
    this.LAST_INPUT_INDEX = this.otpConfig.otpLength - 1;
    this.otpFormChangeListener();
  }

  ngAfterViewInit(): void {
    this.setNativeHTMLElements();
    this.setInitialFocus();
    this.setNumericInputIfPossible();
    this.handleDisable(this.isNgxOtpArrayDisabled);
    this.isInit = true
  }

  ngOnDestroy(): void {
    this.ngxOtpArray$.unsubscribe();
  }

  public get isInvalidMessage(): boolean {
    return !!this.invalidMessage || !!this.invalidMessage.length;
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ?
      'mrx-input-checked-success' :
      this.checkInvalid === true ? 'mrx-input-checked-error' : ''
  }

  get getClasses(): string {
    return `${InputOptSizesEnum[this.size]} ${this.customClasses}`
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    return absCtrl as FormControl;
  }

  clear(): void {
    this.removeStyleFromAll(this.otpConfig.classList.inputFilled);
    this.ngxOtpArray.reset();
    this.ref.detectChanges();

    if (this.otpConfig.autofocus) {
      this.setFocus(0);
    }
  }

  handleKeyUp(index: number, value: string): void {
    if (this.otpConfig.pattern.test(value) && value !== 'Backspace') {
      this.addStyle(index, this.otpConfig.classList.inputFilled);
      if (!this.ngxOtpArray.valid) {
        this.getFormControlByIndex(index).setValue(value, {emitEvent: false});
        this.stepForward(index);
      } else {
        this.blur();
      }
    }
  }

  handleDelete(index: number): void {
    this.removeStyle(index, this.otpConfig.classList.inputFilled);
    if (
      (this.otpConfig.behavior === NgxOtpBehavior.LEGACY &&
        !this.focusedInputHasValue) ||
      this.otpConfig.behavior !== NgxOtpBehavior.LEGACY
    ) {
      this.stepBackward(index);
    } else {
      this.focusedInputHasValue = false;
    }
  }

  handleFocus(index: number): void {
    this.focusedInputHasValue = !!this.ngxOtpArray.controls[index].value;
    if (
      this.otpConfig.behavior === NgxOtpBehavior.LEGACY &&
      this.focusedInputHasValue
    ) {
      this.inputs[index].select();
    }
  }

  stepBackward(index: number): void {
    if (index > 0) {
      this.setFocus(index - 1);
    }
  }

  stepForward(index: number): void {
    if (index < this.LAST_INPUT_INDEX) {
      this.setFocus(index + 1);
    }
  }

  private otpFormChangeListener(): void {
    this.ngxOtpArray$ = this.ngxOtpArray.valueChanges.subscribe((values) => {
      if (this.isInit) {
        this.change.emit(values);

        if (this.ngxOtpArray.valid) {
          this.fillChange.emit(values.join(''));
        }
      }
    });
  }

  private setUpOtpForm(): void {
    for (let i = 0; i < this.otpConfig.otpLength; i++) {
      this.ngxOtpArray.push(new FormControl('', [Validators.required]));
    }
  }

  private setUpAriaLabels(): void {
    const labels = this.otpConfig.ariaLabels;

    this.ariaLabels = Array.isArray(labels)
      ? labels
      : new Array(this.otpConfig.otpLength).fill(
        labels || this.DEFAULT_ARIA_LABEL
      );
  }

  private setNativeHTMLElements(): void {
    this.inputs = this.otpInputElements.map((element) => element.nativeElement);
  }

  private setInitialFocus(): void {
    if (this.otpConfig.autofocus) {
      this.setFocus(0);
    }
  }

  private setInitialStyles(): void {
    this.styles = this.otpService.init2DArray(this.otpConfig.otpLength);
    this.addStyleToAll(this.otpConfig.classList.input);
    console.log(this.styles);
  }

  private setFocus(index: number): void {
    this.inputs[index].focus();
  }

  private setNumericInputIfPossible(): void {
    if (this.otpConfig.numericInputMode) {
      this.otpConfig.pattern = this.defaultPattern;
      this.inputs.map((element) => {
        element.setAttribute('inputmode', 'numeric');
        element.setAttribute('pattern', '[0-9]*');
      });
    }
  }

  private blur(): void {
    if (this.otpConfig.autoblur) {
      this.inputs.map((input) => input.blur());
    }
  }

  private handlePaste(value: string): void {
    if (this.otpConfig.pattern.test(value)) {
      let lastIndex = 0;
      value
        .split('')
        .slice(0, this.otpConfig.otpLength)
        .map((character: string, index: number) => {
          this.addStyle(index, this.otpConfig.classList.inputFilled);
          this.getFormControlByIndex(index).setValue(character);
          lastIndex = index;
        });

      if (this.ngxOtpArray.valid) {
        this.blur();
      } else {
        this.setFocus(lastIndex + 1);
      }
    }
  }

  private handleDisable(isDisabled: boolean): void {
    if (isDisabled) {
      this.ngxOtpArray.disable();
      this.addStyleToAll(this.otpConfig.classList.inputDisabled);
    } else {
      this.ngxOtpArray.enable();
      this.removeStyleFromAll(this.otpConfig.classList.inputDisabled);
    }
  }

  private handleStatusChange(status: NgxOtpStatus): void {
    this.removeStyleFromAll([
      ...this.otpService.toArray(
        this.otpConfig.classList.inputSuccess
      ),
      ...this.otpService.toArray(this.otpConfig.classList.inputError),
    ]);

    if (status) {
      if (status === 'success') {
        this.addStyleToAll(this.otpConfig.classList.inputSuccess);
      } else if (status === 'error') {
        console.log(this.otpConfig);
        this.addStyleToAll(this.otpConfig.classList.inputError);
      }
    }
  }

  private getFormControlByIndex(index: number): FormControl {
    return this.ngxOtpArray.controls[index] as FormControl;
  }

  private addStyle(index: number, styles: string | string[]): void {
    this.styles = this.otpService.addItemAtIndex(
      this.styles,
      index,
      this.otpService.toArray(styles)
    );
  }

  private addStyleToAll(styles: string | string[]): void {
    this.styles = this.otpService.addItemToAll(
      this.styles,
      this.otpService.toArray(styles)
    );
    console.log(styles);
  }

  private removeStyle(index: number, styles: string | string[]): void {
    this.styles = this.otpService.removeItemAtIndex(
      this.styles,
      index,
      this.otpService.toArray(styles)
    );
  }

  private removeStyleFromAll(styles: string | string[]): void {
    this.styles = this.otpService.removeItemFromAll(
      this.styles,
      this.otpService.toArray(styles)
    );
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    // @ts-ignore
    this.handlePaste(event.clipboardData.getData('text'));
  }
}

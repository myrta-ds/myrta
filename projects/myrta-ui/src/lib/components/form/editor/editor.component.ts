import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { changeIconsFunction } from './modules/change-icon-module';
import { defaultToolbar } from './config';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { popupToolbars } from './config/popups-toolbar';
import { ToolbarConfig } from './models/toolbar.model';
import { v4 as uuidv4 } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';

@Component({
  selector: 'mrx-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true,
    },
  ]
})
export class EditorComponent implements ControlValueAccessor, OnChanges {
  private _isInit = false;
  public value = '';
  public valueLength = 0;
  public isFocused: boolean | null = false;

  public defaultConfig: any = {
    ...defaultToolbar,
    popup: popupToolbars,
    language: 'ru',
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    link: {
      noFollowCheckbox: false
    },
    minHeight: 110,
    iframe: false,
    imageDefaultWidth: 200,
    editHTMLDocumentMode: false,
    cleanHTML: {
      fillEmptyParagraph: true
    },
    placeholder: '',
    toolbarAdaptive: false,
    toolbarInline: true,
    toolbarInlineForSelection: false,
    toolbarInlineDisableFor: [],
    toolbarInlineDisabledButtons: ['source'],
    disabled: false,
    readonly: false,
    askBeforePasteHTML: false,
    defaultActionOnPaste: 'insert_only_text',
    askBeforePasteFromWord: false,
    hidePoweredByJodit: true,
    beautifyHTML: true,
    addNewLine: true,
    events: {
      getIcon: changeIconsFunction,
    },
    // uploader: {
    //   insertImageAsBase64URI: true
    // },
    // limitChars: 10,
    // limitHTML: 170,
    // colors: ['#ff0000', '#00ff00', '#0000ff', '#0000ff', '#0000ff', '#0000ff', '/', '#0000ff'],
  };

  // SAVE STATE
  public uuid: string = uuidv4();
  @Input() public fields: Field[] = [];

  @Input() public toolbar!: ToolbarConfig;
  @Input() public maxLength = 0;
  @Input() public minHeight = 110;
  @Input() public customClasses = '';
  @Input() public placeholder = '';
  @Input() public disabled = false;
  @Input() public readonly = false;
  @Input() public iframe = false;
  @Input() public config: any = this.defaultConfig;

  @Input() public editHTMLDocumentMode = false;

  @Input() public invalid = false;
  @Input() public invalidMessage: string | string[] = '';
  @Input() public checkInvalid: true | false | null = null;

  @ViewChild('editorElementRef') editorElementRef!: any;

  @Output() public changed: EventEmitter<string> = new EventEmitter<string>();

  constructor(private changeDetection: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toolbar']) {
      this.defaultConfig = { ...this.defaultConfig, ...changes['toolbar'].currentValue };
    }
    if (changes['maxLength']) {
      this.defaultConfig = { ...this.defaultConfig, limitChars: changes['maxLength'].currentValue };
    }
    if (changes['placeholder']) {
      this.defaultConfig = { ...this.defaultConfig, placeholder: changes['placeholder'].currentValue };
    }
    if (changes['disabled']) {
      this.defaultConfig = { ...this.defaultConfig, disabled: changes['disabled'].currentValue };
    }
    if (changes['readonly']) {
      this.defaultConfig = { ...this.defaultConfig, readonly: changes['readonly'].currentValue };
    }
    if (changes['iframe']) {
      this.defaultConfig = { ...this.defaultConfig, iframe: changes['iframe'].currentValue };
    }
    if (changes['editHTMLDocumentMode']) {
      this.defaultConfig = {
        ...this.defaultConfig,
        editHTMLDocumentMode: changes['editHTMLDocumentMode'].currentValue
      };
    }
    if (changes['askBeforePasteHTML']) {
      this.defaultConfig = { ...this.defaultConfig, askBeforePasteHTML: changes['askBeforePasteHTML'].currentValue };
    }
    if (changes['askBeforePasteFromWord']) {
      this.defaultConfig = {
        ...this.defaultConfig,
        askBeforePasteFromWord: changes['askBeforePasteFromWord'].currentValue
      };
    }
    if (changes['defaultActionOnPaste']) {
      this.defaultConfig = {
        ...this.defaultConfig,
        defaultActionOnPaste: changes['defaultActionOnPaste'].currentValue
      };
    }
    if (changes['minHeight']) {
      this.defaultConfig = { ...this.defaultConfig, minHeight: changes['minHeight'].currentValue };
    }
    if (changes['config']) {
      this.defaultConfig = { ...this.defaultConfig, ...changes['config'].currentValue };
    }
  }

  public get isValid(): boolean {
    return true;
  }

  public get isInvalidMessage(): boolean {
    return !!this.invalidMessage || !!this.invalidMessage.length;
  }

  public get checkValidClasses(): string {
    return this.checkInvalid === false ? 'mrx-input-checked-success' : this.checkInvalid === true ? 'mrx-input-checked-error' : '';
  }

  public get getClasses(): string {
    return `${this.customClasses} ${this.checkValidClasses}`;
  }

  public insertPositionText(text: string) {
    this.editorElementRef.editor.s.insertHTML(text);
  }

  public changeFocused(value: boolean): void {
    this.isFocused = value;
    this.changeDetection.detectChanges();
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

  public writeValue(outsideValue: any) {
    this.value = this._sanitizeValue(outsideValue);
    if (outsideValue !== null) {
      setTimeout(() => {
        this._isInit = true;
      });
    }
  }

  public updateValue(insideValue: string) {
    if (this.maxLength) {
      this._calculateChartsCount();
    }

    if (this._isInit) {
      this.value = insideValue;
      this.changed.emit(insideValue);
      this.onChange(insideValue);
      this.onTouched();
    }
  }

  private _sanitizeValue(value: string): string {
    return value ? value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') : value;
  }

  private _calculateChartsCount() {
    this.valueLength = this.editorElementRef.editor.text.replace(/\s+/g, '').length;
  }
}

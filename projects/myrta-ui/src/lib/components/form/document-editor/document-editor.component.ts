import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ShortCodeI } from './models/document-editor-short-codes.enum';
import { EditorComponent } from '../editor/editor.component';
import { SimpleModalService } from 'ngx-simple-modal';
import {
  DocumentEditorPreviewModalComponent
} from './components/document-editor-preview-modal/document-editor-preview-modal.component';
import {
  transformSysNameToViewName,
  transformViewNameToPreviewName,
  transformViewNameToSysName
} from './helpers/transform-sysname';
import { ToolbarConfig } from '../editor/models/toolbar.model';

@Component({
  selector: 'mrx-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DocumentEditorComponent),
      multi: true,
    },
  ]
})
export class DocumentEditorComponent implements ControlValueAccessor {
  public value = ''
  public isHiddenShortCodes = true

  @Input() public shortCodes: ShortCodeI[] = []
  @Input() public shortCodeViewCount = 0
  @Input() public editHTMLDocumentMode = true;
  @Input() public toolbar!: ToolbarConfig
  @Input() public customClasses = '';
  @Input() public placeholder = '';
  @Input() public disabled = false;
  @Input() public readonly = false;

  @ViewChild('editor') editor!: EditorComponent;

  @Output() public changed: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private simpleModalService: SimpleModalService
  ) { }

  public get transformedValue(): string {
    return transformSysNameToViewName(this.value, this.shortCodes);
  }

  public get sliceShortCodeButtons(): ShortCodeI[] {
    return this.isSliced ? this.shortCodes.slice(0, this.shortCodeViewCount) : this.shortCodes
  }

  public get isSliced(): boolean {
    return this.isHiddenShortCodes && !!this.shortCodeViewCount && (this.shortCodeViewCount < this.shortCodes.length)
  }

  public insertShortCode(shortCode: ShortCodeI) {
    this.editor.insertPositionText(`[${shortCode.viewName}]`)
  }

  public openPreviewModal() {
    this.simpleModalService.addModal(DocumentEditorPreviewModalComponent, {
      title: 'ПРЕДПРОСМОТР',
      content: transformViewNameToPreviewName(this.value, this.shortCodes)
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
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
    this.value = transformSysNameToViewName(outsideValue, this.shortCodes);
  }

  public updateValue(insideValue: string) {
    this.value = insideValue;
    this.changed.emit(transformViewNameToSysName(insideValue, this.shortCodes))
    this.onChange(transformViewNameToSysName(insideValue, this.shortCodes));
    this.onTouched();
  }

  public showAllShortCodes() {
    this.isHiddenShortCodes = false
  }
}

import { AfterContentChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { DomSanitizer } from '@angular/platform-browser';
import { EditorComponent } from "../../../editor/editor.component";

export interface DocumentEditorPreviewModalParams {
  title: string;
  content: string
}

export interface DocumentEditorPreviewModalResult {
  result: boolean;
}

@Component({
  selector: 'mrx-document-editor-preview-modal',
  templateUrl: './document-editor-preview-modal.component.html'
})
export class DocumentEditorPreviewModalComponent extends SimpleModalComponent
  <DocumentEditorPreviewModalParams, DocumentEditorPreviewModalResult> implements AfterContentChecked {
  public title: string | undefined;
  public content: string | undefined;

  @ViewChild('iframeTemplate') iframeTemplate!: ElementRef;

  constructor(public sanitizer: DomSanitizer) {
    super();
    this.result = {result: false};
  }

  ngAfterContentChecked(): void {
    if (this.iframeTemplate) {
      this.iframeTemplate.nativeElement.style.height =
        this.iframeTemplate.nativeElement.contentWindow.document.documentElement.scrollHeight + 'px';
    }
  }

  public ok() {
    this.result = {result: true};
    this.close();
  }
}

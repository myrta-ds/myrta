import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditorComponent } from './document-editor.component';
import { EditorModule } from '../editor/editor.module';
import { ButtonModule } from '../../button/button.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from '../../modal/modal.module';
import {
  DocumentEditorPreviewModalComponent
} from './components/document-editor-preview-modal/document-editor-preview-modal.component';


@NgModule({
  declarations: [
    DocumentEditorComponent,
    DocumentEditorPreviewModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    ButtonModule,
    ModalModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DocumentEditorComponent]
})
export class DocumentEditorModule {
}

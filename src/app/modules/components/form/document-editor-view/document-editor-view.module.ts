import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DocumentEditorViewRoutingModule } from './document-editor-view-routing.module';
import { DocumentEditorViewComponent } from './document-editor-view.component';
import { DocumentEditorModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    DocumentEditorViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocumentEditorViewRoutingModule,
    DocumentEditorModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class DocumentEditorViewModule { }

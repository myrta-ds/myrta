import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditorViewRoutingModule } from './editor-view-routing.module';
import { EditorViewComponent } from './editor-view.component';
import { EditorModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    EditorViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EditorViewRoutingModule,
    EditorModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class EditorViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextareaViewRoutingModule } from './input-textarea-view-routing.module';
import { InputTextareaViewComponent } from './input-textarea-view.component';
import { InputTextareaModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputTextareaViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextareaViewRoutingModule,
    InputTextareaModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputTextareaViewModule { }

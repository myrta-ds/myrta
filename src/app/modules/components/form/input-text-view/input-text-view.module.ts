import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextViewRoutingModule } from './input-text-view-routing.module';
import { InputTextViewComponent } from './input-text-view.component';
import { InputTextModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputTextViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextViewRoutingModule,
    InputTextModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputTextViewModule { }

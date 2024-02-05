import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HintErrorMessageViewRoutingModule } from './hint-error-message-view-routing.module';
import { HintErrorMessageViewComponent } from './hint-error-message-view.component';
import {
  LabelModule,
  ButtonModule,
  HintErrorMessageModule,
  ContentWrapperModule,
  InputTextModule
} from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    HintErrorMessageViewComponent
  ],
  imports: [
    CommonModule,
    HintErrorMessageViewRoutingModule,
    FormsModule,
    ContentWrapperModule,
    HintErrorMessageModule,
    LabelModule,
    ButtonModule,
    InputTextModule
  ]
})
export class HintErrorMessageViewModule {
}

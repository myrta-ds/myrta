import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HintErrorMessageViewRoutingModule } from './hint-error-message-view-routing.module';
import { HintErrorMessageViewComponent } from './hint-error-message-view.component';
import { LabelModule, ButtonModule, HintErrorMessageModule, ContentWrapperModule } from '../../../../../projects/myrta-ui/src/public-api';
import { InputTextModule } from 'myrtex-mf-ui';

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

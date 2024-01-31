import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageViewRoutingModule } from './error-message-view-routing.module';
import { ErrorMessageViewComponent } from './error-message-view.component';
import {
  InputDatetimeModule,
  InputNumberModule, InputSearchModule,
  InputSelectModule, InputTextareaModule,
  InputTextModule, JdEditorModule
} from 'myrtex-mf-ui';
import { ContentWrapperModule } from '../../../../../projects/myrta-ui/src/public-api';


@NgModule({
  declarations: [
    ErrorMessageViewComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageViewRoutingModule,
    InputTextModule,
    InputNumberModule,
    InputDatetimeModule,
    InputSelectModule,
    InputSearchModule,
    InputTextareaModule,
    JdEditorModule,
    ContentWrapperModule
  ]
})
export class ErrorMessageViewModule {
}

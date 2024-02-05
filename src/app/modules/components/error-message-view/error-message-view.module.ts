import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageViewRoutingModule } from './error-message-view-routing.module';
import { ErrorMessageViewComponent } from './error-message-view.component';
import {
  ContentWrapperModule, EditorModule, InputDatetimeModule,
  InputNumberModule, InputSearchModule, InputSelectModule, InputTextareaModule,
  InputTextModule
} from '../../../../../projects/myrta-ui/src/public-api';


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
    EditorModule,
    ContentWrapperModule
  ]
})
export class ErrorMessageViewModule {
}

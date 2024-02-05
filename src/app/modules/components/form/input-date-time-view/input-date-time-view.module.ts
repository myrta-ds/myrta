import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputDateTimeViewRoutingModule } from './input-date-time-view-routing.module';
import { InputDateTimeViewComponent } from './input-date-time-view.component';
import { InputDateTimeModule, ContentWrapperModule, LabelModule, ButtonModule, DateFormatModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputDateTimeViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputDateTimeViewRoutingModule,
    InputDateTimeModule,
    ContentWrapperModule,
    LabelModule,
    ButtonModule,
    DateFormatModule
  ]
})
export class InputDateTimeViewModule { }

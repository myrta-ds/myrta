import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputDatepickerViewRoutingModule } from './input-datepicker-view-routing.module';
import { InputDatepickerViewComponent } from './input-datepicker-view.component';
import { InputDatepickerModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputDatepickerViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputDatepickerViewRoutingModule,
    InputDatepickerModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputDatepickerViewModule { }

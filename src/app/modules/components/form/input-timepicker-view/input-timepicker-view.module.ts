import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTimepickerViewRoutingModule } from './input-timepicker-view-routing.module';
import { InputTimepickerViewComponent } from './input-timepicker-view.component';
import { InputTimepickerModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputTimepickerViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTimepickerViewRoutingModule,
    InputTimepickerModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputTimepickerViewModule { }

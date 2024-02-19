import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputDatetimeViewRoutingModule } from './input-datetime-view-routing.module';
import { InputDatetimeViewComponent } from './input-datetime-view.component';
// import { InputDatetimeModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputDatetimeViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputDatetimeViewRoutingModule,
    // InputDatetimeModule,
    // ContentWrapperModule,
    // LabelModule
  ]
})
export class InputDatetimeViewModule { }

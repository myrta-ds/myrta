import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioGroupViewRoutingModule } from './radio-group-view-routing.module';
import { RadioGroupViewComponent } from './radio-group-view.component';


@NgModule({
  declarations: [
    RadioGroupViewComponent
  ],
  imports: [
    CommonModule,
    RadioGroupViewRoutingModule
  ]
})
export class RadioGroupViewModule { }

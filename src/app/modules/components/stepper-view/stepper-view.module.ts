import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepperViewRoutingModule } from './stepper-view-routing.module';
import { StepperViewComponent } from './stepper-view.component';
import { StepperModule, ContentWrapperModule, ButtonModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    StepperViewComponent
  ],
  imports: [
    CommonModule,
    StepperViewRoutingModule,
    StepperModule,
    ContentWrapperModule,
    ButtonModule
  ]
})
export class StepperViewModule { }

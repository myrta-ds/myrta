import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlsWrapperViewRoutingModule } from './controls-wrapper-view-routing.module';
import { ControlsWrapperViewComponent } from './controls-wrapper-view.component';
import { ContentWrapperModule, ControlsWrapperModule, InputTextareaModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    ControlsWrapperViewComponent
  ],
  imports: [
    CommonModule,
    ControlsWrapperViewRoutingModule,
    ContentWrapperModule,
    ControlsWrapperModule,
    InputTextareaModule
  ]
})
export class ControlsWrapperViewModule { }

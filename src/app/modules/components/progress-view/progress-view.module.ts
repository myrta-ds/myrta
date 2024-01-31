import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressViewRoutingModule } from './progress-view-routing.module';
import { ProgressViewComponent } from './progress-view.component';
import { ProgressModule, LabelModule, ButtonModule, ContentWrapperModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    ProgressViewComponent
  ],
  imports: [
    CommonModule,
    ProgressViewRoutingModule,
    ContentWrapperModule,
    ProgressModule,
    LabelModule,
    ButtonModule
  ]
})
export class ProgressViewModule { }

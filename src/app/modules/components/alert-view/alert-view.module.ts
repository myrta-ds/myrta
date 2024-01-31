import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertViewRoutingModule } from './alert-view-routing.module';
import { AlertViewComponent } from './alert-view.component';
import { AlertModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    AlertViewComponent
  ],
  imports: [
    CommonModule,
    AlertViewRoutingModule,
    AlertModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class AlertViewModule { }

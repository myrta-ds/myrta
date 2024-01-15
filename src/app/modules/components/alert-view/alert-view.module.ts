import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertViewRoutingModule } from './alert-view-routing.module';
import { AlertViewComponent } from './alert-view.component';
import { AlertModule } from 'myrta-ui';
import { ContentWrapperModule, LabelModule } from 'myrtex-mf-ui';


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

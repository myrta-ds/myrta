import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetWrapperViewRoutingModule } from './widget-wrapper-view-routing.module';
import { WidgetWrapperViewComponent } from './widget-wrapper-view.component';


@NgModule({
  declarations: [
    WidgetWrapperViewComponent
  ],
  imports: [
    CommonModule,
    WidgetWrapperViewRoutingModule
  ]
})
export class WidgetWrapperViewModule { }

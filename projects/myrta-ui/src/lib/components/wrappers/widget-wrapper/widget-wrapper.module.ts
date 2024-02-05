import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetWrapperComponent } from './widget-wrapper.component';



@NgModule({
  declarations: [
    WidgetWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetWrapperComponent
  ]
})
export class WidgetWrapperModule { }

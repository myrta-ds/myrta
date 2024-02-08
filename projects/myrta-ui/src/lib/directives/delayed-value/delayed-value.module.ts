import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelayedValueDirective } from './delayed-value.directive';



@NgModule({
  declarations: [DelayedValueDirective],
  imports: [
    CommonModule
  ],
  exports: [
    DelayedValueDirective
  ]
})
export class DelayedValueModule { }

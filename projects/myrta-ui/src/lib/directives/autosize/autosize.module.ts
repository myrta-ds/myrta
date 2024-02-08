import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosizeDirective } from './autosize.directive';

@NgModule({
  declarations: [
    AutosizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutosizeDirective
  ]
})
export class AutosizeModule { }

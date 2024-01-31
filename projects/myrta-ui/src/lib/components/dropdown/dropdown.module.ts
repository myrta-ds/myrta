import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HideAfterClickDirective } from './directives/hide-after-click.directive';



@NgModule({
  declarations: [DropdownComponent, HideAfterClickDirective],
  imports: [CommonModule, NgSelectModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DropdownComponent, HideAfterClickDirective],
})
export class DropdownModule { }

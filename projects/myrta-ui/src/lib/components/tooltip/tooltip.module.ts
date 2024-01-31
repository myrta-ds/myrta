import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipTriggerComponent } from './tooltip-trigger/tooltip-trigger.component';
import { FormsModule } from '@angular/forms';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipComponent, TooltipTriggerComponent],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TooltipComponent, TooltipTriggerComponent],
})
export class TooltipModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsWrapperComponent } from './controls-wrapper.component';
import { ControlsItemComponent } from './components/controls-item/controls-item.component';



@NgModule({
  declarations: [ControlsWrapperComponent, ControlsItemComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ControlsWrapperComponent, ControlsItemComponent]
})
export class ControlsWrapperModule { }

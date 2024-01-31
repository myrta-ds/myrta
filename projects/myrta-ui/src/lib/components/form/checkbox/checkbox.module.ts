import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { TooltipModule } from '../../tooltip/tooltip.module';
import { SaveStateModule } from '../../save-state/save-state.module';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, FormsModule, TooltipModule, SaveStateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CheckboxComponent],
})
export class CheckboxModule {}

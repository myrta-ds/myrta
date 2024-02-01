import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import { FormsModule } from '@angular/forms';
import { SaveStateModule } from '../../save-state/save-state.module';

@NgModule({
  declarations: [SwitchComponent],
  imports: [CommonModule, FormsModule, SaveStateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [SwitchComponent],
})
export class SwitchModule {}

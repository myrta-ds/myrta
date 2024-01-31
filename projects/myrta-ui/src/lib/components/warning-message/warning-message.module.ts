import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningMessageComponent } from './warning-message.component';

@NgModule({
  declarations: [WarningMessageComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [WarningMessageComponent],
})
export class WarningMessageModule { }

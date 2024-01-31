import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintErrorMessageComponent } from './hint-error-message.component';

@NgModule({
  declarations: [HintErrorMessageComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HintErrorMessageComponent],
})
export class HintErrorMessageModule { }

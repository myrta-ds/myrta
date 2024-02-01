import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message.component';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ErrorMessageComponent],
})
export class ErrorMessageModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { ErrorMessageModule } from '../../error-message/error-message.module';

@NgModule({
  declarations: [RatingComponent],
  imports: [
    CommonModule,
    ErrorMessageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RatingComponent]
})
export class RatingModule { }

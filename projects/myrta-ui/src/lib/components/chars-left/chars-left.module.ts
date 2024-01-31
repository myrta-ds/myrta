import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharsLeftComponent } from './chars-left.component';

@NgModule({
  declarations: [CharsLeftComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CharsLeftComponent],
})
export class CharsLeftModule {}

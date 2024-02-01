import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RadioGroupComponent],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RadioGroupComponent]
})
export class RadioGroupModule { }

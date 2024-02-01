import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RadioComponent],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RadioComponent]
})
export class RadioModule { }

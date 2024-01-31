import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './content-wrapper.component';



@NgModule({
  declarations: [ContentWrapperComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ContentWrapperComponent]
})
export class ContentWrapperModule { }

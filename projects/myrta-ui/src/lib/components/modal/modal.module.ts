import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ButtonModule } from "../button/button.module";

@NgModule({
  declarations: [ ModalComponent ],
  imports: [ CommonModule, ButtonModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ ModalComponent ]
})
export class ModalModule { }

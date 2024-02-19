import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { FormsModule } from '@angular/forms';
import { CharsLeftModule } from '../../chars-left/chars-left.module';
import { ErrorMessageModule } from '../../error-message/error-message.module';



@NgModule({
  declarations: [
    InputPasswordComponent
  ],
  imports: [
    FormsModule,
    CharsLeftModule,
    ErrorMessageModule,
    CommonModule
  ],
  exports: [
    InputPasswordComponent
  ]
})
export class InputPasswordModule { }

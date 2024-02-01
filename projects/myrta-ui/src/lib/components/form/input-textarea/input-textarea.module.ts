import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaComponent } from './input-textarea.component';
import { FormsModule } from '@angular/forms';
import { CharsLeftModule } from '../../chars-left/chars-left.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ErrorMessageModule } from "../../error-message/error-message.module";
import { SaveStateModule } from "../../save-state/save-state.module";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputTextareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    CharsLeftModule,
    ErrorMessageModule,
    SaveStateModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  exports: [InputTextareaComponent],
})
export class InputTextareaModule {}

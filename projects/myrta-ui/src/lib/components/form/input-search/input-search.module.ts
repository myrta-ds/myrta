import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharsLeftModule } from '../../chars-left/chars-left.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { InputSearchComponent } from './input-search.component';
import { ErrorMessageModule } from "../../error-message/error-message.module";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    CharsLeftModule,
    ErrorMessageModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  exports: [InputSearchComponent],
})
export class InputSearchModule {}

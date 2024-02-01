import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDatetimeComponent } from './input-datetime.component';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { LabelModule } from '../../label/label.module';
import { ErrorMessageModule } from '../../error-message/error-message.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputDatetimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ErrorMessageModule,
    LabelModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputDatetimeComponent],
})
export class InputDatetimeModule {}

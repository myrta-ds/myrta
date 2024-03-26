import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputDateTimeComponent } from './input-date-time.component';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { SaveStateModule } from "../../save-state/save-state.module";
import { ErrorMessageModule } from "../../error-message/error-message.module";
import { LabelModule } from "../../label/label.module";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputDateTimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    SaveStateModule,
    ErrorMessageModule,
    LabelModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputDateTimeComponent],
})
export class InputDateTimeModule {}

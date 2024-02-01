import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTimepickerComponent } from './input-timepicker.component';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ErrorMessageModule } from '../../error-message/error-message.module';
import { LabelModule } from '../../label/label.module';
import { SaveStateModule } from '../../save-state/save-state.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputTimepickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SaveStateModule,
    ErrorMessageModule,
    LabelModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputTimepickerComponent],
})
export class InputTimepickerModule {}

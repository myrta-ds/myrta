import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharsLeftModule } from '../../chars-left/chars-left.module';
import { ErrorMessageModule } from "../../error-message/error-message.module";
import { SaveStateModule } from "../../save-state/save-state.module";

const maskConfigFunction: () => Partial<IConfig> = () => {
  // системный формат числа с дробной частью и группой разраядов (тысячи)
  const c = Intl.NumberFormat().formatToParts(1234.5);

  const t = c.find(x => x.type === 'group')?.value;

  const d = c.find(x => x.type === 'decimal')?.value as (','|'.');

  return {
    validation: false,
    thousandSeparator: t,
    decimalMarker: d
  };
};

@NgModule({
  declarations: [InputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CharsLeftModule,
    SaveStateModule,
    ErrorMessageModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputNumberComponent],
})
export class InputNumberModule {}

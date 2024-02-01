import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { FormsModule } from '@angular/forms';
import { CharsLeftModule } from '../../chars-left/chars-left.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ErrorMessageModule } from '../../error-message/error-message.module';
import { SaveStateModule } from '../../save-state/save-state.module';
import { CdkTooltipModule } from '../../cdk-tooltip/cdk-tooltip.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    CharsLeftModule,
    ErrorMessageModule,
    SaveStateModule,
    CdkTooltipModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  exports: [InputTextComponent],
})
export class InputTextModule {}

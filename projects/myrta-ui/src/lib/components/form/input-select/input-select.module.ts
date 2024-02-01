import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSelectComponent } from './input-select.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { LabelModule } from '../../label/label.module';
import { LoaderModule } from '../../loader/loader.module';
// import { SaveStateModule } from '../../wrappers/save-state/save-state.module';
import { ErrorMessageModule } from '../../error-message/error-message.module';

@NgModule({
  declarations: [InputSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    LabelModule,
    LoaderModule,
    // SaveStateModule,
    ErrorMessageModule,
    NgSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputSelectComponent],
})
export class InputSelectModule {}

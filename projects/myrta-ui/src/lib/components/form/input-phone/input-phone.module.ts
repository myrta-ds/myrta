import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPhoneComponent } from './input-phone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeElementInjectorDirective } from './directives/native-element-injector.directive';
import { DropdownModule } from '../../dropdown/dropdown.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ErrorMessageModule } from '../../error-message/error-message.module';
import { SaveStateModule } from '../../save-state/save-state.module';

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [InputPhoneComponent, NativeElementInjectorDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    SaveStateModule,
    ErrorMessageModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  exports: [InputPhoneComponent]
})
export class InputPhoneModule {

}

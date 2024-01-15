import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { SafeModule } from '../../pipes/safe/safe.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SafeModule, LoaderModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ButtonComponent],
})
export class ButtonModule {}

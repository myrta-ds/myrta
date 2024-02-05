import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { JoditAngularModule } from 'jodit-angular';
import { FormsModule } from '@angular/forms';
import { CharsLeftModule } from '../../chars-left/chars-left.module';
import { SafeModule } from '../../../pipes/safe/safe.module';
import { ErrorMessageModule } from '../../error-message/error-message.module';
import { SaveStateModule } from '../../save-state/save-state.module';

@NgModule({
  declarations: [ EditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    JoditAngularModule,
    CharsLeftModule,
    SafeModule,
    ErrorMessageModule,
    SaveStateModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [EditorComponent]
})
export class EditorModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { CheckboxGroupItemComponent } from './components/checkbox-group-item/checkbox-group-item.component';
import { CheckboxGroupHeaderComponent } from './components/checkbox-group-header/checkbox-group-header.component';
import { ErrorMessageModule } from '../../error-message/error-message.module';
import { LabelModule } from '../../label/label.module';
import { SaveStateModule } from '../../save-state/save-state.module';
import { InputSearchModule } from '../input-search/input-search.module';

@NgModule({
  declarations: [CheckboxGroupComponent, CheckboxGroupItemComponent, CheckboxGroupHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    InputSearchModule,
    LabelModule,
    SaveStateModule,
    ErrorMessageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CheckboxGroupComponent]
})
export class CheckboxGroupModule { }

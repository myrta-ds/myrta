import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxViewRoutingModule } from './checkbox-view-routing.module';
import { CheckboxViewComponent } from './checkbox-view.component';
import { CheckboxModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';
import { InputTextModule } from 'myrtex-mf-ui';

@NgModule({
  declarations: [
    CheckboxViewComponent
  ],
  imports: [
    CommonModule,
    CheckboxViewRoutingModule,
    FormsModule,
    CheckboxModule,
    ContentWrapperModule,
    LabelModule,
    InputTextModule,
  ]
})
export class CheckboxViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckboxGroupViewRoutingModule } from './checkbox-group-view-routing.module';
import { CheckboxGroupViewComponent } from './checkbox-group-view.component';
import { CheckboxGroupModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    CheckboxGroupViewComponent
  ],
  imports: [
    CommonModule,
    CheckboxGroupViewRoutingModule,
    FormsModule,
    CheckboxGroupModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class CheckboxGroupViewModule { }

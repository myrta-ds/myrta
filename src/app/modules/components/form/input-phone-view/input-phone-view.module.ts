import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputPhoneViewRoutingModule } from './input-phone-view-routing.module';
import { InputPhoneViewComponent } from './input-phone-view.component';
import { InputPhoneModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputPhoneViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPhoneViewRoutingModule,
    InputPhoneModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputPhoneViewModule { }

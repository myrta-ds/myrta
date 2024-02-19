import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputPasswordViewRoutingModule } from './input-password-view-routing.module';
import { InputPasswordViewComponent } from './input-password-view.component';
import { InputPasswordModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputPasswordViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputPasswordViewRoutingModule,
    InputPasswordModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputPasswordViewModule { }

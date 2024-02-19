import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputOptViewRoutingModule } from './input-opt-view-routing.module';
import { InputOptViewComponent } from './input-opt-view.component';
import { InputOptModule, ButtonModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputOptViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputOptViewRoutingModule,
    InputOptModule,
    ButtonModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputOptViewModule { }

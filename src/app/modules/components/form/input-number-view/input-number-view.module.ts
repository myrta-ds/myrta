import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputNumberViewRoutingModule } from './input-number-view-routing.module';
import { InputNumberViewComponent } from './input-number-view.component';
import { InputNumberModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputNumberViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputNumberViewRoutingModule,
    InputNumberModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputNumberViewModule { }

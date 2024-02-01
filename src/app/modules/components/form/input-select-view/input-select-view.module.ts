import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputSelectViewRoutingModule } from './input-select-view-routing.module';
import { InputSelectViewComponent } from './input-select-view.component';
import { InputSelectModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';


@NgModule({
  declarations: [
    InputSelectViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputSelectViewRoutingModule,
    InputSelectModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputSelectViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputDateViewRoutingModule } from './input-date-view-routing.module';
import { InputDateViewComponent } from './input-date-view.component';
// import { InputDateModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputDateViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputDateViewRoutingModule,
    // InputDateModule,
    // ContentWrapperModule,
    // LabelModule
  ]
})
export class InputDateViewModule { }

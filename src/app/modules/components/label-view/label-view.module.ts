import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelViewRoutingModule } from './label-view-routing.module';
import { LabelViewComponent } from './label-view.component';
import { LabelModule, ContentWrapperModule, InputTextModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    LabelViewComponent
  ],
  imports: [
    CommonModule,
    LabelViewRoutingModule,
    InputTextModule,
    LabelModule,
    ContentWrapperModule
  ]
})
export class LabelViewModule { }

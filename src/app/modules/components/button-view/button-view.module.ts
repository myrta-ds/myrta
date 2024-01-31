import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonViewRoutingModule } from './button-view-routing.module';
import { ButtonViewComponent } from './button-view.component';
import { ButtonModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    ButtonViewComponent
  ],
  imports: [
    CommonModule,
    ButtonViewRoutingModule,
    LabelModule,
    ContentWrapperModule,
    ButtonModule
  ]
})
export class ButtonViewModule { }

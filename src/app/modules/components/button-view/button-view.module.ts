import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonViewRoutingModule } from './button-view-routing.module';
import { ButtonViewComponent } from './button-view.component';
import { ContentWrapperModule, LabelModule } from 'myrtex-mf-ui';
import { ButtonModule } from 'myrta-ui';


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

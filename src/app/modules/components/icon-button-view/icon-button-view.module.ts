import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconButtonViewRoutingModule } from './icon-button-view-routing.module';
import { IconButtonViewComponent } from './icon-button-view.component';
import { IconButtonModule, ContentWrapperModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    IconButtonViewComponent
  ],
  imports: [
    CommonModule,
    IconButtonViewRoutingModule,
    ContentWrapperModule,
    IconButtonModule
  ]
})
export class IconButtonViewModule { }

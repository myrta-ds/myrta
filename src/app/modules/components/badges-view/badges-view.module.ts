import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesViewRoutingModule } from './badges-view-routing.module';
import { BadgesViewComponent } from './badges-view.component';
import { BadgesModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    BadgesViewComponent
  ],
  imports: [
    CommonModule,
    BadgesViewRoutingModule,
    BadgesModule,
    LabelModule,
    ContentWrapperModule
  ]
})
export class BadgesViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkViewRoutingModule } from './link-view-routing.module';
import { LinkViewComponent } from './link-view.component';
import { LinkModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    LinkViewComponent
  ],
  imports: [
    CommonModule,
    LinkViewRoutingModule,
    ContentWrapperModule,
    LabelModule,
    LinkModule
  ]
})
export class LinkViewModule { }

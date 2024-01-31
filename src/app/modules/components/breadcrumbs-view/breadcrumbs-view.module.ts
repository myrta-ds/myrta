import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsViewRoutingModule } from './breadcrumbs-view-routing.module';
import { BreadcrumbsViewComponent } from './breadcrumbs-view.component';
import { BreadcrumbsModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    BreadcrumbsViewComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbsViewRoutingModule,
    BreadcrumbsModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class BreadcrumbsViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatorViewRoutingModule } from './paginator-view-routing.module';
import { PaginatorViewComponent } from './paginator-view.component';
import { PaginatorModule, ContentWrapperModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    PaginatorViewComponent
  ],
  imports: [
    CommonModule,
    PaginatorViewRoutingModule,
    ContentWrapperModule,
    PaginatorModule
  ]
})
export class PaginatorViewModule { }

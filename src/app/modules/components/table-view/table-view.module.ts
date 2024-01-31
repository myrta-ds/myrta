import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableViewRoutingModule } from './table-view-routing.module';
import { TableViewComponent } from './table-view.component';
import { TableModule, ButtonModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    TableViewComponent
  ],
  imports: [
    CommonModule,
    TableViewRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class TableViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownViewRoutingModule } from './dropdown-view-routing.module';
import { DropdownViewComponent } from './dropdown-view.component';
import { DropdownModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    DropdownViewComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    DropdownViewRoutingModule
  ]
})
export class DropdownViewModule { }

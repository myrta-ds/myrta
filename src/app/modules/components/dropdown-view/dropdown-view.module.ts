import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownViewRoutingModule } from './dropdown-view-routing.module';
import { DropdownViewComponent } from './dropdown-view.component';

@NgModule({
  declarations: [
    DropdownViewComponent
  ],
  imports: [
    CommonModule,
    DropdownViewRoutingModule
  ]
})
export class DropdownViewModule { }

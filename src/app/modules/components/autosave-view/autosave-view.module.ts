import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosaveViewRoutingModule } from './autosave-view-routing.module';
import { AutosaveViewComponent } from './autosave-view.component';

@NgModule({
  declarations: [
    AutosaveViewComponent
  ],
  imports: [
    CommonModule,
    AutosaveViewRoutingModule
  ]
})
export class AutosaveViewModule { }

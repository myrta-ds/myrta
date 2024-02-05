import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesNavViewRoutingModule } from './pages-nav-view-routing.module';
import { PagesNavViewComponent } from './pages-nav-view.component';


@NgModule({
  declarations: [
    PagesNavViewComponent
  ],
  imports: [
    CommonModule,
    PagesNavViewRoutingModule
  ]
})
export class PagesNavViewModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesNavComponent} from './pages-nav.component';

@NgModule({
  declarations: [
    PagesNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagesNavComponent
  ]
})

export class PagesNavModule {}

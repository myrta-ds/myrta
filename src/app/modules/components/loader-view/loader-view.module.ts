import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderViewRoutingModule } from './loader-view-routing.module';
import { LoaderViewComponent } from './loader-view.component';
import { LoaderModule } from 'myrta-ui';
import { ContentWrapperModule, LabelModule } from 'myrtex-mf-ui';


@NgModule({
  declarations: [
    LoaderViewComponent
  ],
  imports: [
    CommonModule,
    LoaderViewRoutingModule,
    LoaderModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class LoaderViewModule { }

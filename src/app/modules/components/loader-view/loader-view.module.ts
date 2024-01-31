import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderViewRoutingModule } from './loader-view-routing.module';
import { LoaderViewComponent } from './loader-view.component';
import { LoaderModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

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

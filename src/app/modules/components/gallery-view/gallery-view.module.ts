import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryViewRoutingModule } from './gallery-view-routing.module';
import { GalleryViewComponent } from './gallery-view.component';
import { GalleryModule, ButtonModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    GalleryViewComponent
  ],
  imports: [
    CommonModule,
    GalleryViewRoutingModule,
    GalleryModule,
    ButtonModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class GalleryViewModule { }

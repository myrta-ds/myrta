import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RatingViewRoutingModule } from './rating-view-routing.module';
import { RatingViewComponent } from './rating-view.component';
import { RatingModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    RatingViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingViewRoutingModule,
    RatingModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class RatingViewModule { }

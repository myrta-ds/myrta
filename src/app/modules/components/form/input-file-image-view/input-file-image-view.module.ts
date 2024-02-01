import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputFileImageViewRoutingModule } from './input-file-image-view-routing.module';
import { InputFileImageViewComponent } from './input-file-image-view.component';
import { InputFileImageModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputFileImageViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputFileImageViewRoutingModule,
    InputFileImageModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputFileImageViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputFileViewRoutingModule } from './input-file-view-routing.module';
import { InputFileViewComponent } from './input-file-view.component';
import { InputFileModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputFileViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputFileViewRoutingModule,
    InputFileModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputFileViewModule { }

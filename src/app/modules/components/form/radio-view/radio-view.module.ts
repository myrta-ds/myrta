import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RadioViewRoutingModule } from './radio-view-routing.module';
import { RadioViewComponent } from './radio-view.component';
import { RadioModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    RadioViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RadioViewRoutingModule,
    RadioModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class RadioViewModule { }

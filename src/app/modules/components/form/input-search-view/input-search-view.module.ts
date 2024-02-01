import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputSearchViewRoutingModule } from './input-search-view-routing.module';
import { InputSearchViewComponent } from './input-search-view.component';
import { InputSearchModule, ContentWrapperModule, LabelModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    InputSearchViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputSearchViewRoutingModule,
    InputSearchModule,
    ContentWrapperModule,
    LabelModule
  ]
})
export class InputSearchViewModule { }

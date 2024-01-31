import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruncateTextViewRoutingModule } from './truncate-text-view-routing.module';
import { TruncateTextViewComponent } from './truncate-text-view.component';
import { TruncateTextModule, ContentWrapperModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    TruncateTextViewComponent
  ],
  imports: [
    CommonModule,
    TruncateTextViewRoutingModule,
    ContentWrapperModule,
    TruncateTextModule
  ]
})
export class TruncateTextViewModule { }

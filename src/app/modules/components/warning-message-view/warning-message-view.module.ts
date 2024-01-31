import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningMessageViewRoutingModule } from './warning-message-view-routing.module';
import { WarningMessageViewComponent } from './warning-message-view.component';
import { WarningMessageModule, ContentWrapperModule } from '../../../../../projects/myrta-ui/src/public-api';
import { InputTextModule } from 'myrtex-mf-ui';

@NgModule({
  declarations: [
    WarningMessageViewComponent
  ],
  imports: [
    CommonModule,
    WarningMessageViewRoutingModule,
    ContentWrapperModule,
    WarningMessageModule,
    InputTextModule
  ]
})
export class WarningMessageViewModule { }

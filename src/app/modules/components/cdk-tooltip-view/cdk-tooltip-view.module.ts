import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkTooltipViewRoutingModule } from './cdk-tooltip-view-routing.module';
import { CdkTooltipViewComponent } from './cdk-tooltip-view.component';
import { CdkTooltipModule, ButtonModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    CdkTooltipViewComponent
  ],
  imports: [
    CommonModule,
    CdkTooltipViewRoutingModule,
    ContentWrapperModule,
    LabelModule,
    CdkTooltipModule,
    ButtonModule
  ]
})
export class CdkTooltipViewModule { }

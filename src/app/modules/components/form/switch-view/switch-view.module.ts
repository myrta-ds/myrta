import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SwitchViewRoutingModule } from './switch-view-routing.module';
import { SwitchViewComponent } from './switch-view.component';
import { SwitchModule, ContentWrapperModule, LabelModule, CdkTooltipModule } from '../../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    SwitchViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SwitchViewRoutingModule,
    SwitchModule,
    ContentWrapperModule,
    LabelModule,
    CdkTooltipModule
  ]
})
export class SwitchViewModule { }

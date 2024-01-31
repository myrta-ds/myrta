import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsViewRoutingModule } from './tabs-view-routing.module';
import { TabsViewComponent } from './tabs-view.component';
import { TabsModule, ContentWrapperModule, LabelModule } from '../../../../../projects/myrta-ui/src/public-api';

@NgModule({
  declarations: [
    TabsViewComponent
  ],
  imports: [
    CommonModule,
    TabsViewRoutingModule,
    ContentWrapperModule,
    LabelModule,
    TabsModule
  ]
})
export class TabsViewModule { }

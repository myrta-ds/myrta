import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsGroupComponent } from './tabs-group/tabs-group.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [TabsGroupComponent, TabComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TabsGroupComponent, TabComponent],
})
export class TabsModule {}

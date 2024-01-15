import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './components/badge/badge.component';
import { BadgeGroupComponent } from './components/badge-group/badge-group.component';


@NgModule({
  declarations: [
    BadgeComponent,
    BadgeGroupComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    BadgeComponent,
    BadgeGroupComponent
  ]
})
export class BadgesModule {}

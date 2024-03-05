import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { FormsModule } from '@angular/forms';
import { BadgesModule } from '../badges/badges.module';
import { LinkModule } from '../link/link.module';
import { TooltipModule } from '../tooltip/tooltip.module';
import { SwitchModule } from '../form/switch/switch.module';
import { CdkTooltipModule } from '../cdk-tooltip/cdk-tooltip.module';


@NgModule({
  declarations: [LabelComponent],
  imports: [CommonModule, FormsModule, TooltipModule, SwitchModule, BadgesModule, LinkModule, CdkTooltipModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [LabelComponent],
})
export class LabelModule {
}

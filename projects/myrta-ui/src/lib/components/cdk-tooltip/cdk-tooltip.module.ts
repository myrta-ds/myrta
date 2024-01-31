import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipContainerComponent } from './cdk-tooltip/tooltip-container.component';
import { CdkTooltipDirective } from './cdk-tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [TooltipContainerComponent, CdkTooltipDirective],
  imports: [CommonModule, OverlayModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CdkTooltipDirective]
})
export class CdkTooltipModule {
}

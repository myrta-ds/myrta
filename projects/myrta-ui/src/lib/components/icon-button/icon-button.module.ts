import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './icon-button.component';
import { CdkTooltipModule } from '../cdk-tooltip/cdk-tooltip.module';

@NgModule({
  declarations: [IconButtonComponent],
  imports: [CommonModule, CdkTooltipModule],
  exports: [IconButtonComponent]
})
export class IconButtonModule {}

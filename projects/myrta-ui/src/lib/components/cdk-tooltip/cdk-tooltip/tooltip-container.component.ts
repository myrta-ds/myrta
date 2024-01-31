import { ChangeDetectionStrategy, Component, Inject, InjectionToken, TemplateRef } from '@angular/core';
import { TooltipData } from '../models/tooltip-data';

export const TOOLTIP_DATA = new InjectionToken<TooltipData>('Data to display in tooltip');

@Component({
  selector: 'mrx-cdk-tooltip',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipContainerComponent {
  get asString(): string | false {
    return typeof this.tooltipData.value === 'string' ? this.tooltipData.value : false;
  }

  get asTemplate(): TemplateRef<void> | null {
    return this.tooltipData.value instanceof TemplateRef ? this.tooltipData.value : null;
  }

  get getMaxWidth(): string {
    return this.tooltipData.maxWidth ? this.tooltipData.maxWidth + 'px' : '480px'
  }

  constructor(@Inject(TOOLTIP_DATA) public tooltipData: TooltipData) {}
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TooltipTextPositionEnum, TooltipTextPositionTypes, TooltipTriggerEnum, TooltipTriggerTypes } from './tooltip-trigger.enum';

@Component({
  selector: 'mrx-tooltip-trigger',
  templateUrl: './tooltip-trigger.component.html',
  styleUrls: ['./tooltip-trigger.component.less'],
  providers: []
})
export class TooltipTriggerComponent {
  @Input() public triggerTextPosition: TooltipTextPositionTypes = 'default'
  @Input() public triggerType: TooltipTriggerTypes = 'attention'
  @Input() public customClasses: string = ''

  @Input() public isVisibleTooltip: boolean = false
  @Output() public toggleTooltip: EventEmitter<void> = new EventEmitter<void>()

  public get getClasses(): string {
    return `${TooltipTextPositionEnum[this.triggerTextPosition]} ${this.customClasses} ${this.getTypeClass}`;
  }

  public get getIconClass(): string {
    return `${TooltipTriggerEnum[this.triggerType]}`
  }

  public get getTypeClass(): string {
    switch (this.triggerType) {
      case 'attention':
        return 'type-attention'
      case 'info':
        return 'type-info'
      default:
        return 'type-attention'
    }
  }

  public onToggle(): void {
    this.toggleTooltip.emit()
  }
}

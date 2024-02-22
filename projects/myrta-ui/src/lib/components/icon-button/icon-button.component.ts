import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IconButtonTypeEnum,
  IconButtonTypeTypes,
  IconButtonSizeEnum,
  IconButtonSizeTypes,
  IconButtonStateEnum,
  IconButtonStateTypes
} from './icon-button.enum';

@Component({
  selector: 'mrx-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input() size: IconButtonSizeTypes = 'small';
  @Input() state: IconButtonStateTypes = 'default';
  @Input() type: IconButtonTypeTypes = 'positive';

  @Input() iconClass = '';
  @Input() disabled = false;
  @Input() tooltip = '';
  @Input() isActive: boolean | null | undefined = false;
  @Input() customClasses = '';

  @Output() mrxClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public get stateTooltip(): boolean {
    return !!this.tooltip.trim();
  }

  public get getClasses(): string {
    return `${this.iconClass} ${IconButtonSizeEnum[this.size]} ${IconButtonStateEnum[this.state]} ${IconButtonTypeEnum[this.type]} ${this.customClasses}`
  }

  public buttonClick($event: MouseEvent): void {
    this.mrxClick.emit($event)
  }
}

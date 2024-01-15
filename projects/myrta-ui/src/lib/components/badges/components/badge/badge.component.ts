import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  BadgeColorClassesEnum, BadgeColorType, BadgeI, BadgeSizeEnum, BadgeSizeType, BadgeTagType, BadgeTagTypeClassesEnum,
  BadgeType, BadgeTypeEnum,
} from '../../badge.enum';

@Component({
  selector: 'mrx-badge',
  templateUrl: './badge.component.html'
})
export class BadgeComponent {
  @Input() type: BadgeType = 'default'
  @Input() tag: BadgeTagType = 'tag'
  @Input() size: BadgeSizeType = 'default'
  @Input() color: BadgeColorType = 'brand'
  @Input() customColor: string | undefined
  @Input() text = ''
  @Input() path: string | undefined
  @Input() customClasses = ''

  @Output() clicked: EventEmitter<BadgeI> = new EventEmitter<BadgeI>();

  public get getCustomColor(): string | null {
    return this.customColor ? this.customColor : null
  }

  public get getClasses(): string {
    return `${this.customClasses} ${BadgeTagTypeClassesEnum[this.tag]} ${BadgeTypeEnum[this.type]} ${this.customColor ? '' : BadgeColorClassesEnum[this.color]} ${BadgeSizeEnum[this.size]}`;
  }

  public onClick($event: MouseEvent): void {
    this.clicked.emit({
      type: this.type,
      color: this.color,
      text: this.text,
      path: this.path
    })
  }
}

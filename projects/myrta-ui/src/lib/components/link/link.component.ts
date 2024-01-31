import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import {
  LinkSizesEnum,
  LinkSizesTypes,
  LinkTargetTypes,
  LinkTargetTypesEnum,
  LinkTypes,
  LinkTypesEnum
} from './link.enum';

@Component({
  selector: 'mrx-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() type: LinkTypes = 'default';
  @Input() target: LinkTargetTypes = '_self';
  @Input() monochrome: boolean = false;
  @Input() customClasses: string = '';
  @Input() href: string = '#';
  @Input() prevent: boolean = false;
  @Input() size: LinkSizesTypes = 'medium';

  @Output() clicked = new EventEmitter<MouseEvent>();

  public get getClasses(): string {
    return `${LinkTypesEnum[this.type]} ${this.customClasses} ${this.monochrome ? 'mrx-link-monochrome' : 'mrx-link-colored'} ${LinkSizesEnum[this.size]}`;
  }

  public get getTarget(): string {
    return LinkTargetTypesEnum[this.target]
  }

  public onClick(event: any): void {
    if (this.prevent) {
      event.preventDefault()
      this.clicked.emit()
    }
  }
}

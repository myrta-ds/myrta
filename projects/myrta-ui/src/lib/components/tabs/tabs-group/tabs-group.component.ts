import { Component, Input } from '@angular/core';
import {
  TabsClasses,
  TabSize, TabsTypesClasses, TabTypes,
} from '../tabs.enum';

@Component({
  selector: 'mrx-tabs-group',
  templateUrl: 'tabs-group.component.html',
  styleUrls: ['./tabs-group.component.less']
})
export class TabsGroupComponent {

  @Input() customClasses = '';
  @Input() size: TabSize = 'medium';
  @Input() type: TabTypes = 'default';
  @Input() isResponsive = false;

  public get tabClasses(): string {
    return `${TabsTypesClasses[this.type]} ${TabsClasses[this.size]} ${this.customClasses}`;
  }
}

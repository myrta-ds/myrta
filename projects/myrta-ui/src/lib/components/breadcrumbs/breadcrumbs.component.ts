import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BreadcrumbsItemI, BreadcrumbsType, BreadcrumbsTypeEnum } from './breadcrumbs.enum';

@Component({
  selector: 'mrx-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  @Input() type: BreadcrumbsType = 'default'
  @Input() items: BreadcrumbsItemI[] = []
  @Input() item: BreadcrumbsItemI | undefined
  @Input() customClasses = ''

  public get getClasses(): string {
    return `${this.customClasses} ${BreadcrumbsTypeEnum[this.type]}`;
  }
}

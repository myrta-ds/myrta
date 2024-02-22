import { Component } from '@angular/core';
import { BreadcrumbsItemI } from '../../../../../projects/myrta-ui/src/lib/components/breadcrumbs/breadcrumbs.enum';

@Component({
  selector: 'mrx-breadcrumbs-view',
  templateUrl: './breadcrumbs-view.component.html',
  styleUrls: ['./breadcrumbs-view.component.less']
})
export class BreadcrumbsViewComponent {
  public item: BreadcrumbsItemI = {
    text: 'Назад',
    path: '/',
    isShowArrow: false
  }

  public itemWithArrow: BreadcrumbsItemI = {
    text: 'Назад',
    path: '/',
    isShowArrow: true
  }

  public items: BreadcrumbsItemI[] = [
    {
      text: 'Главная',
      path: '/',
      isLink: true
    },
    {
      text: 'Каталог',
      path: '/',
      isLink: true
    },
    {
      text: 'Продукт'
    },
  ]
}

import {Component, Input} from '@angular/core';
import {PagesNavEnum, PagesNavTypes} from './pages-nav.enum';

@Component({
  selector: 'mrx-pages-nav',
  templateUrl: './pages-nav.component.html',
  styleUrls: ['./pages-nav.component.less']
})

export class PagesNavComponent {
  @Input() prevLink = '';
  @Input() prevText = 'Назад';

  @Input() nextLink = '';
  @Input() nextText = 'Вперед';

  @Input() target: PagesNavTypes = 'self';

  public get getTarget(): string {
    return `${PagesNavEnum[this.target]}`;
  }
}

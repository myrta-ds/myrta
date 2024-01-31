import { Component } from '@angular/core';

@Component({
  selector: 'mrx-badges-view',
  templateUrl: './badges-view.component.html',
  styleUrls: ['./badges-view.component.less']
})
export class BadgesViewComponent {
  logger() {
    console.log('click')
  }
}

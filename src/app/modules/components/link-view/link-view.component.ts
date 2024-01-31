import { Component } from '@angular/core';

@Component({
  selector: 'mrx-link-view',
  templateUrl: './link-view.component.html',
  styleUrls: ['./link-view.component.less']
})
export class LinkViewComponent {
  public logger(event: any) {
    console.log('clicked')
  }
}

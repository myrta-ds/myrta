import { Component } from '@angular/core';

@Component({
  selector: 'mrx-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.less']
})
export class TabsViewComponent {
  public activeTabId: number | string= 0;

  public onTabClick(event: number | string) {
    this.activeTabId = event;
  }
}

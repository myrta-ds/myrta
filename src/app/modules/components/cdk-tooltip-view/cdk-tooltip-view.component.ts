import { Component } from '@angular/core';

@Component({
  selector: 'mrx-cdk-tooltip-view',
  templateUrl: './cdk-tooltip-view.component.html',
  styleUrls: ['./cdk-tooltip-view.component.less']
})
export class CdkTooltipViewComponent {
  public active = true

  public get getTooltipMessage(): string {
    return this.active ? 'this is active tooltip asdasd asdasd asdasd asdasd asdas dasdas dasdasd' : 'this is not active tooltip'
  }

  changeActive() {
    this.active = !this.active
  }
}

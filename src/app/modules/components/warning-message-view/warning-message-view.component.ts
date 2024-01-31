import { Component } from '@angular/core';

@Component({
  selector: 'mrx-warning-message-view',
  templateUrl: './warning-message-view.component.html',
  styleUrls: ['./warning-message-view.component.less']
})
export class WarningMessageViewComponent {
  public warningMessage: string = 'This is warning'
}

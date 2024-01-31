import { Component } from '@angular/core';

@Component({
  selector: 'mrx-error-message-view',
  templateUrl: './error-message-view.component.html',
  styleUrls: ['./error-message-view.component.less']
})
export class ErrorMessageViewComponent {
  public errorMessage: string = 'This is error'
  public errorMessages: string[] = [
    'this is first error',
    'this is second error'
  ]
}

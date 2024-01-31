import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrx-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['error-message.component.less']
})
export class ErrorMessageComponent {
  @Input() public invalidMessage: string | string[] = '';
  @Input() public customClasses = '';

  public get getClasses(): string {
    return `${this.customClasses}`;
  }

  public get invalidMessageArray(): string[] {
    if (typeof this.invalidMessage === 'string') {
      return Array(this.invalidMessage);
    } else {
      return this.invalidMessage;
    }
  }
}

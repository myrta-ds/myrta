import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mrx-warning-message',
  templateUrl: './warning-message.component.html',
  styleUrls: ['warning-message.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WarningMessageComponent {
  @Input() public message: string | string[] = '';
  @Input() public customClasses = '';

  public get getClasses(): string {
    return `${this.customClasses}`;
  }

  public get messageArray(): string[] {
    if (typeof this.message === 'string') {
      return Array(this.message);
    } else {
      return this.message;
    }
  }
}

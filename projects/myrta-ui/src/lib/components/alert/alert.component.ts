import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertColorClasses, AlertColors, AlertIconClasses } from './alert.enum';

@Component({
  selector: 'mrx-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() customClasses: string = '';
  @Input() color: AlertColors = 'info';
  @Input() customColor: string = '';
  @Input() message = '';
  @Input() title = '';
  @Input() closable = false;
  @Output() close: EventEmitter<unknown> = new EventEmitter();

  public get getClasses() {
    return `${AlertColorClasses[this.color] ?? ''} ${this.customClasses}`;
  }

  public get getIconClass() {
    return `${AlertIconClasses[this.color]}`;
  }

  public onCloseClick(): void {
    this.close.emit(null);
  }
}

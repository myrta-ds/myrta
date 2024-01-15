import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertColorClasses, AlertColors, AlertIconClasses } from './alert.enum';

@Component({
  selector: 'mrx-alert-view.',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent {
  @Input() customClasses: string = '';
  @Input() color: AlertColors = 'info';
  @Input() customColor: string = '';
  @Input() message = '';
  @Input() title = '';
  @Input() closable = false;
  @Output() close: EventEmitter<unknown> = new EventEmitter();

  get getClasses() {
    return `${AlertColorClasses[this.color] ?? ''} ${this.customClasses}`;
  }
  get getIconClass() {
    return `${AlertIconClasses[this.color]}`;
  }

  onCloseClick() {
    this.close.emit(null);
  }
}

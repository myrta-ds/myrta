import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mrx-editor-toolbar-button',
  templateUrl: './editor-toolbar-button.component.html',
  styleUrls: ['./editor-toolbar-button.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class EditorToolbarButtonComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() id = '';
  @Input() hidden = false;
  @Input() disabled = false;
  @Output() mrxClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  get getIconClass(): string {
    return `icon-${this.icon}`
  }
}

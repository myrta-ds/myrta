import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'mrx-column',
  template: '',
})
export class ColumnComponent {
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() sortLabel: string = '';
  @Input() sortable: boolean = true;
  @Input() isLink: boolean = true
  @Input() customClasses: string = ''

  @ContentChild('templateHead') templateHead!: TemplateRef<any>;
  @ContentChild('templateCell') templateCell!: TemplateRef<any>;
}

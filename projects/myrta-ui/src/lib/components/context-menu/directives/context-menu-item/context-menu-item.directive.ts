import { Highlightable } from '@angular/cdk/a11y';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  TemplateRef,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[contextMenuItem]',
})
export class ContextMenuItemDirective implements Highlightable {
  @Input()
  public subMenu: any;

  @Input()
  public divider = false;

  @Input()
  public enabled: boolean | ((item: any) => boolean) = true;

  @Input()
  public passive = false;

  @Input()
  public visible: boolean | ((item: any) => boolean) = true;

  @Output()
  public execute: EventEmitter<{
    event: MouseEvent | KeyboardEvent;
    item: any;
  }> = new EventEmitter();

  public currentItem: any;
  public isActive = false;
  public get disabled() {
    return (
      this.passive ||
      this.divider ||
      !this.evaluateIfFunction(this.enabled, this.currentItem)
    );
  }
  constructor(
    @Optional()
    public template: TemplateRef<{ item: any }>,
    public elementRef: ElementRef
  ) {}

  public evaluateIfFunction(value: any, item: any): any {
    if (value instanceof Function) {
      return value(item);
    }
    return value;
  }

  public setActiveStyles(): void {
    this.isActive = true;
  }
  public setInactiveStyles(): void {
    this.isActive = false;
  }

  public triggerExecute(item: any, $event: MouseEvent | KeyboardEvent): void {
    if (!this.evaluateIfFunction(this.enabled, item)) {
      return;
    }
    this.execute.emit({ event: $event, item });
  }
}

import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mrxOptPattern]'
})
export class OptPatternDirective {
  private allowedKeys = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'Escape',
    'Tab',
  ];

  @Input('mrxOptPattern') pattern?: RegExp;

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent): void {
    if (
      this.allowedKeys.includes(e.key) ||
      (e.code === 'KeyA' && e.ctrlKey === true) ||
      (e.code === 'KeyC' && e.ctrlKey === true) ||
      (e.code === 'KeyV' && e.ctrlKey === true) ||
      (e.code === 'KeyX' && e.ctrlKey === true) ||
      (e.code === 'KeyA' && e.metaKey === true) ||
      (e.code === 'KeyC' && e.metaKey === true) ||
      (e.code === 'KeyV' && e.metaKey === true) ||
      (e.code === 'KeyX' && e.metaKey === true)
    ) {
      return;
    } else if (this.pattern && !this.pattern.test(e.key)) {
      e.preventDefault();
    }
  }
}

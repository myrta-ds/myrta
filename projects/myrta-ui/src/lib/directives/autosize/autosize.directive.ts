import {
  AfterViewInit,
  Directive,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[mrxAutosize]'
})
export class AutosizeDirective implements AfterViewInit, DoCheck {
  @HostBinding('style.overflow')
  public overflow = 'hidden';

  @Input()
  @HostBinding('rows')
  public rows = 1;

  @Input()
  public autosize = true;

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit() {
    this.resize();
  }

  public ngDoCheck() {
    this.resize();
  }

  @HostListener('input')
  private resize() {
    if (!this.autosize) {
      this.overflow = 'auto'
      return
    }

    const textarea = this.elem.nativeElement as HTMLTextAreaElement;
    // Calculate border height which is not included in scrollHeight
    const borderHeight = textarea.offsetHeight - textarea.clientHeight;
    // Reset textarea height to auto that correctly calculate the new height
    this.setHeight('auto');
    // Set new height
    this.setHeight(`${textarea.scrollHeight + borderHeight}px`);
  }

  private setHeight(value: string) {
    this.renderer.setStyle(this.elem.nativeElement, 'height', value);
  }
}

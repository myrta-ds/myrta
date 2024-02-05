import {
  Directive,
  ElementRef,
  Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[mrxTruncate]',
})
export class TruncateDirective implements OnInit {
  @Input('mrxTruncateRows') rows = '1'
  @Input('mrxTruncateHeight') height = '20px'

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden')
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', '-webkit-box')
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-line-clamp', this.rows)
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-box-orient', 'vertical')
    this.renderer.setStyle(this.elementRef.nativeElement, 'max-height', this.height)
  }
}

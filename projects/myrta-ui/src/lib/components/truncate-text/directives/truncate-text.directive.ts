import {
  AfterContentChecked,
  AfterContentInit,
  Directive,
  ElementRef, EventEmitter,
  HostListener,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { animate, AnimationBuilder, AnimationMetadata, style } from '@angular/animations';
import { LinkComponent } from '../../link/link.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Subscriber, Subscription } from 'rxjs';

@Directive({
  selector: '[mrxTruncateText]',
})
export class TruncateTextDirective implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, OnDestroy {
  private subscribe$!: Subscription
  private defaultLineHeight = 20;
  private defaultAnimateTime = 150;
  private content = ''
  private windowWidth = 0

  @Input() count!: number;
  @Input() responsiveCount!: [number, number];
  @Input() lineHeight!: number;
  @Input() isOpen!: boolean;
  @Input() truncateButtonRef!: LinkComponent;

  @Output() changeVisibleButton: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private elementRef: ElementRef,
    private builder: AnimationBuilder,
    private renderer: Renderer2,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    if (!this.lineHeight) {
      this.checkLineHeight();
    }

    this.subscribe$ = this.breakpointObserver.observe(['(max-width: 768px)']).subscribe((result: BreakpointState) => {
      if (!this.responsiveCount) {
        return this.startAnimate(this.showInitial(this.count));
      }

      if (result.matches) {
        this.count = this.responsiveCount[1]
      } else {
        this.count = this.responsiveCount[0]
      }

      this.startAnimate(this.showInitial(this.responsiveCount[0]));
    })
  }

  ngAfterContentChecked(): void {
    const c = this.elementRef.nativeElement.innerHTML;
    if (c !== this.content) {
      this.content = c;
      this.checkTruncateButton();
    }
  }

  ngAfterContentInit(): void {
    this.content = this.elementRef.nativeElement.innerHTML;
    this.checkTruncateButton();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && !changes['isOpen'].firstChange) {
      if (this.isOpen) {
        this.startAnimate(this.showIn());
      } else {
        this.startAnimate(this.showOut());
      }
    }
  }

  ngOnDestroy(): void {
    this.subscribe$.unsubscribe()
  }

  private startAnimate(metadata: AnimationMetadata | AnimationMetadata[]): void {
    const factory = this.builder.build(metadata);
    const player = factory.create(this.elementRef.nativeElement);

    player.play();
  }

  private checkLineHeight(): void {
    if (this.elementRef.nativeElement.children.length) {
      this.lineHeight = parseInt(getComputedStyle(this.elementRef.nativeElement.childNodes[0]).lineHeight) || this.defaultLineHeight;
    } else {
      this.lineHeight = this.defaultLineHeight;
    }
  }

  private checkTruncateButton(): void {
    setTimeout(() => {
      if (this.lineHeight * this.count >= this.elementRef.nativeElement.scrollHeight) {
        this.changeVisibleButton.emit(false)
      } else {
        this.changeVisibleButton.emit(true)
      }
    });
  }

  private showIn(): AnimationMetadata[] {
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', '-webkit-box');
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-box-orient', 'vertical');
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-line-clamp', 'inherit');

    return [
      style({ maxHeight: this.lineHeight * this.count }),
      animate(`${this.defaultAnimateTime}ms ease-in-out`, style({ maxHeight: this.elementRef.nativeElement.scrollHeight })),
    ];
  }

  private showOut(): AnimationMetadata[] {
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', '-webkit-box');
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-box-orient', 'vertical');

    setTimeout(() => {
      this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-line-clamp', this.count);
    }, this.defaultAnimateTime);

    return [
      style({ '-webkit-line-clamp': 'inherit', maxHeight: '*' }),
      animate(`${this.defaultAnimateTime}ms ease-in-out`, style({ maxHeight: this.lineHeight * this.count })),
    ];
  }


  private showInitial(count: number): AnimationMetadata[] {
    this.renderer.setStyle(this.elementRef.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', '-webkit-box');
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-box-orient', 'vertical');
    this.renderer.setStyle(this.elementRef.nativeElement, '-webkit-line-clamp', this.count);
    this.renderer.setStyle(this.elementRef.nativeElement, 'line-height', `${this.lineHeight}px`);

    return [style({ maxHeight: this.lineHeight * this.count })];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkTruncateButton();
  }
}

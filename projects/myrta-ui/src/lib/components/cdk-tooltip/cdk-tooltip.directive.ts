import { Directive, ElementRef, HostListener, Injector, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipContainerComponent, TOOLTIP_DATA } from './cdk-tooltip/tooltip-container.component';
import { ConnectedPositionVariantsType, positionStrategy } from './constants';
import {  TooltipDataValue } from './models/tooltip-data';

@Directive({
  selector: '[mrxCdkTooltip]'
})
export class CdkTooltipDirective implements OnDestroy {
  @Input() mrxCdkTooltip!: TooltipDataValue;
  @Input() tooltipActive = true;
  @Input() autoCloseByScroll = false;
  @Input() tooltipPosition: ConnectedPositionVariantsType = 'top';
  @Input() tooltipMaxWidth: number | null = null;

  private overlayRef: OverlayRef | null = null;

  constructor(
    private element: ElementRef<HTMLElement>,
    private overlay: Overlay,
    private viewContainer: ViewContainerRef,
  ) {}

  @HostListener('mouseenter')
  @HostListener('focus')
  showTooltip(): void {
    if (this.mrxCdkTooltip === null || !this.tooltipActive) {
      return;
    }
    if (this.overlayRef?.hasAttached() === true) {
      return;
    }

    this.attachTooltip();
  }

  @HostListener('mouseleave')
  @HostListener('blur')
  hideTooltip(): void {
    if (this.overlayRef?.hasAttached() === true) {
      this.overlayRef?.detach();
    }
  }

  ngOnDestroy(): void {
    this.overlayRef?.dispose();
  }

  private attachTooltip(): void {
    if (this.overlayRef === null) {
      const positionStrategy = this.getPositionStrategy();
      this.overlayRef = this.overlay.create({
        positionStrategy,
        scrollStrategy: this.overlay.scrollStrategies.close(),
        hasBackdrop: false
      });
    }

    const injector = Injector.create({
      providers: [
        {
          provide: TOOLTIP_DATA,
          useValue: {
            value: this.mrxCdkTooltip,
            maxWidth: this.tooltipMaxWidth
          },
        },
      ],
    });
    const component = new ComponentPortal(TooltipContainerComponent, this.viewContainer, injector);
    this.overlayRef.attach(component);
  }

  private getPositionStrategy(): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(this.element)
      .withPositions(positionStrategy[this.tooltipPosition]);
  }
}

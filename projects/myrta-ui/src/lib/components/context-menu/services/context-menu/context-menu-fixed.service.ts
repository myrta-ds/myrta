import {ElementRef, Injectable} from '@angular/core';
import {ScrollStrategyOptions, Overlay} from '@angular/cdk/overlay';
import { ContextMenuService, IContextMenuContext } from './context-menu.service';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuFixedService extends ContextMenuService {
  constructor(private overlayFix: Overlay, private scrollStrategyFix: ScrollStrategyOptions) {

    super(overlayFix, scrollStrategyFix);
  }

  override openContextMenu(context: IContextMenuContext) {
    const {anchorElement, event, parentContextMenu} = context;

    if (!parentContextMenu) {
      const mouseEvent = event as MouseEvent;
      // @ts-ignore
      this['fakeElement'].getBoundingClientRect = (): DOMRect => ({
        bottom: mouseEvent.clientY,
        height: 0,
        left: mouseEvent.clientX,
        right: mouseEvent.clientX,
        top: mouseEvent.clientY,
        width: 0,
      } as DOMRect);
      this.closeAllContextMenus({eventType: 'cancel', event});
      const positionStrategy = this.overlayFix.position()
        .flexibleConnectedTo(new ElementRef(anchorElement || this['fakeElement']))
        .withPositions([
          {
            originX: 'start', originY: 'bottom',
            overlayX: 'start', overlayY: 'top',
          },
          {
            originX: 'start', originY: 'top',
            overlayX: 'start', overlayY: 'bottom',
          },
          {
            originX: 'end', originY: 'top',
            overlayX: 'start', overlayY: 'top',
          },
          {
            originX: 'start', originY: 'top',
            overlayX: 'end', overlayY: 'top',
          },
          {
            originX: 'end', originY: 'center',
            overlayX: 'start', overlayY: 'center',
          },
          {
            originX: 'start', originY: 'center',
            overlayX: 'end', overlayY: 'center',
          },
        ])
        .withFlexibleDimensions(false);
      this['overlays'] = [this.overlayFix.create({
        positionStrategy,
        panelClass: 'ngx-contextmenu',
        scrollStrategy: this.scrollStrategyFix.close(),
      })];
      this.attachContextMenu(this['overlays'][0], context);
    } else {
      const positionStrategy = this.overlayFix
        .position()
        .flexibleConnectedTo(new ElementRef(event ? event.target : anchorElement))
        .withPositions([
          {
            originX: 'end', originY: 'top',
            overlayX: 'start', overlayY: 'top',
          },
          {
            originX: 'start', originY: 'top',
            overlayX: 'end', overlayY: 'top',
          },
          {
            originX: 'end', originY: 'bottom',
            overlayX: 'start', overlayY: 'bottom',
          },
          {
            originX: 'start', originY: 'bottom',
            overlayX: 'end', overlayY: 'bottom',
          },
        ])
        .withFlexibleDimensions(false);
      const newOverlay = this.overlayFix.create({
        positionStrategy,
        panelClass: 'ngx-contextmenu',
        scrollStrategy: this.scrollStrategyFix.close(),
      });
      this.destroySubMenus(parentContextMenu);
      this['overlays'] = this['overlays'].concat(newOverlay);
      this.attachContextMenu(newOverlay, context);
    }
  }
}

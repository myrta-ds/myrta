import { Component, Input } from '@angular/core';
import { TruncateCount, TruncateResponsiveCount } from './truncate-text.enum';

@Component({
  selector: 'mrx-truncate-text',
  templateUrl: './truncate-text.component.html'
})
export class TruncateTextComponent {
  public isVisibleButton = false

  @Input() count: TruncateCount = 2
  @Input() responsiveCount!: TruncateResponsiveCount
  @Input() isOpen = false
  @Input() lineHeight!: number

  public changeVisibleButton(event: boolean): void {
    this.isVisibleButton = event
  }
}

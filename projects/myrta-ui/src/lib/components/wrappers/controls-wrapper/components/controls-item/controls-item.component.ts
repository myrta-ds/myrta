import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mrx-controls-item',
  templateUrl: 'controls-item.component.html',
  styleUrls: ['./controls-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlsItemComponent {
  @Input() separator = false
}

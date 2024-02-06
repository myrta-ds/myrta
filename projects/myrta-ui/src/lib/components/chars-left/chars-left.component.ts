import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'mrx-chars-left',
  templateUrl: './chars-left.component.html',
  styleUrls: ['./chars-left.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharsLeftComponent {
  @Input() public maxlength = 0;
  @Input() public valueLength = 0;
  @Input() public value = '';

  public get getValueLength(): number {
    return this.value ? this.value.length : this.valueLength
  }
}

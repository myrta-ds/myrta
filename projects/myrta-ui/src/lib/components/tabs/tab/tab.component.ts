import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mrx-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['./tab.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent {
  @Input() id!: number| string;
  @Input() customClasses = '';
  @Input() subTitle!: string;
  @Input() active!: boolean;
  @Input() disabled!: boolean;


  @Output() onClick: EventEmitter<number| string> = new EventEmitter<number| string>();

  public onTabClick(): void {
    this.onClick.emit(this.id);
  }
}

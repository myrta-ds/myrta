import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressClasses, ProgressColors } from './progress.enum';

@Component({
  selector: 'mrx-progress',
  templateUrl: 'progress.component.html',
  styleUrls: ['./progress.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProgressComponent {
  @Input() value: number = 0;
  @Input() customClasses: string = '';
  @Input() color: ProgressColors = 'default';

  public get getProgressClasses(){
    return `${ProgressClasses[this.color]} ${this.customClasses}`;
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StepperType } from './stepper.enum';

@Component({
  selector: 'mrx-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['./stepper.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  @Input() totalSteps = 0;
  @Input() currentStep = 0;
  @Input() customClasses = '';
  @Input() type: StepperType = 'default';

  @Input() completeText = 'Завершено';
  @Input() requiredText = 'Осталось';
  @Input() successText = 'Конец!';
  @Input() isBottomLabel = false

  public get percent(): number {
    if (this.currentStep >= this.totalSteps) {
      return 100;
    }
    if (this.totalSteps > 0) {
      return (100 * this.currentStep) / this.totalSteps;
    }
    return 0;
  }

  public get isCompleted(): boolean {
    return this.currentStep >= this.totalSteps;
  }

  public get difference(): number {
    return this.totalSteps - this.currentStep;
  }
}

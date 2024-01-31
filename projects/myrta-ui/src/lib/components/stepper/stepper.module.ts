import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { ProgressModule } from '../progress/progress.module';

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule, ProgressModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [StepperComponent, ProgressModule],
})
export class StepperModule {}

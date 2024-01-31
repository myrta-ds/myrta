import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperViewComponent } from './stepper-view.component';

const routes: Routes = [
  {
    path: '',
    component: StepperViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepperViewRoutingModule { }

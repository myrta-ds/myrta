import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTimepickerViewComponent } from './input-timepicker-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputTimepickerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputTimepickerViewRoutingModule { }

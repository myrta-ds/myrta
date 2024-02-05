import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDatepickerViewComponent } from './input-datepicker-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputDatepickerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputDatepickerViewRoutingModule { }

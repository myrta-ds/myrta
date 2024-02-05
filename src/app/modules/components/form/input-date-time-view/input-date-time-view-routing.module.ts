import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDateTimeViewComponent } from './input-date-time-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputDateTimeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputDateTimeViewRoutingModule { }

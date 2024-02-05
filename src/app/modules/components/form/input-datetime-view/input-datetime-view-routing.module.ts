import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDatetimeViewComponent } from './input-datetime-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputDatetimeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputDatetimeViewRoutingModule { }

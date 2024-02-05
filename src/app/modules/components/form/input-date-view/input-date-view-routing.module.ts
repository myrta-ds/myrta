import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDateViewComponent } from './input-date-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputDateViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputDateViewRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputSelectViewComponent } from './input-select-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputSelectViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputSelectViewRoutingModule { }

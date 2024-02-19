import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputOptViewComponent } from './input-opt-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputOptViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputOptViewRoutingModule { }

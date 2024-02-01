import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputNumberViewComponent } from './input-number-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputNumberViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputNumberViewRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonViewComponent } from './button-view.component';

const routes: Routes = [
  {
    path: '',
    component: ButtonViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonViewRoutingModule { }

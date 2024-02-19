import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPasswordViewComponent } from './input-password-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputPasswordViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputPasswordViewRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalViewComponent } from './modal-view.component';

const routes: Routes = [
  {
    path: '',
    component: ModalViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalViewRoutingModule { }

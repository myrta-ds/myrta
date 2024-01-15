import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertViewComponent } from './alert-view.component';

const routes: Routes = [
  {
    path: '',
    component: AlertViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertViewRoutingModule { }

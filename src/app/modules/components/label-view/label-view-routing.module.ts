import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabelViewComponent } from './label-view.component';

const routes: Routes = [
  {
    path: '',
    component: LabelViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelViewRoutingModule { }

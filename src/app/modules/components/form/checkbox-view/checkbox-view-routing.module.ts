import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxViewComponent } from './checkbox-view.component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxViewRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxGroupViewComponent } from './checkbox-group-view.component';

const routes: Routes = [
  {
    path: '',
    component: CheckboxGroupViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckboxGroupViewRoutingModule { }

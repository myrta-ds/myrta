import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputSearchViewComponent } from './input-search-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputSearchViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputSearchViewRoutingModule { }

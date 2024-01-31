import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownViewComponent } from './dropdown-view.component';

const routes: Routes = [
  {
    path: '',
    component: DropdownViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownViewRoutingModule { }

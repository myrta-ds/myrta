import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatorViewComponent } from './paginator-view.component';

const routes: Routes = [
  {
    path: '',
    component: PaginatorViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatorViewRoutingModule { }

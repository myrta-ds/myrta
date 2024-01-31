import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbsViewComponent } from './breadcrumbs-view.component';

const routes: Routes = [
  {
    path: '',
    component: BreadcrumbsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbsViewRoutingModule { }

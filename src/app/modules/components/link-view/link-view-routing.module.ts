import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkViewComponent } from './link-view.component';

const routes: Routes = [
  {
    path: '',
    component: LinkViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkViewRoutingModule { }

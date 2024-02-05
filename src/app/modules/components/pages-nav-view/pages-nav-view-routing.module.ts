import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesNavViewComponent } from './pages-nav-view.component';

const routes: Routes = [
  {
    path: '',
    component: PagesNavViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesNavViewRoutingModule { }

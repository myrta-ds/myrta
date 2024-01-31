import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgesViewComponent } from './badges-view.component';

const routes: Routes = [
  {
    path: '',
    component: BadgesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadgesViewRoutingModule { }

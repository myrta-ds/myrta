import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingViewComponent } from './rating-view.component';

const routes: Routes = [
  {
    path: '',
    component: RatingViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingViewRoutingModule { }

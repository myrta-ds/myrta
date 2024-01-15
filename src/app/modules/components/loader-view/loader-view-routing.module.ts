import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderViewComponent } from './loader-view.component';

const routes: Routes = [
  {
    path: '',
    component: LoaderViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoaderViewRoutingModule { }

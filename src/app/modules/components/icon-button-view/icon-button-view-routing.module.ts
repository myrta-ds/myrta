import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconButtonViewComponent } from './icon-button-view.component';

const routes: Routes = [
  {
    path: '',
    component: IconButtonViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconButtonViewRoutingModule { }

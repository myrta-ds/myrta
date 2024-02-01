import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioViewComponent } from './radio-view.component';

const routes: Routes = [
  {
    path: '',
    component: RadioViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioViewRoutingModule { }

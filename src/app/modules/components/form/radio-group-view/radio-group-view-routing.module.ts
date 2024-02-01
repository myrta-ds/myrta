import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioGroupViewComponent } from './radio-group-view.component';

const routes: Routes = [
  {
    path: '',
    component: RadioGroupViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadioGroupViewRoutingModule { }

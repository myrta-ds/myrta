import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwitchViewComponent } from './switch-view.component';

const routes: Routes = [
  {
    path: '',
    component: SwitchViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SwitchViewRoutingModule { }

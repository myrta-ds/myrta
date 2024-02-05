import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlsWrapperViewComponent } from './controls-wrapper-view.component';

const routes: Routes = [
  {
    path: '',
    component: ControlsWrapperViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlsWrapperViewRoutingModule { }

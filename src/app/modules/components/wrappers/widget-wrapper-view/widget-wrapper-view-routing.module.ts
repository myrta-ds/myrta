import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetWrapperViewComponent } from './widget-wrapper-view.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetWrapperViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetWrapperViewRoutingModule { }

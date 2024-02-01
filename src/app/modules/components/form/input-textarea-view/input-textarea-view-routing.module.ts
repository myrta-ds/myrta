import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTextareaViewComponent } from './input-textarea-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputTextareaViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputTextareaViewRoutingModule { }

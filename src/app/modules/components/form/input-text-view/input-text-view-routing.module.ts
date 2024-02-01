import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputTextViewComponent } from './input-text-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputTextViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputTextViewRoutingModule { }

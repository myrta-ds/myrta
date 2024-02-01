import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFileViewComponent } from './input-file-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputFileViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputFileViewRoutingModule { }

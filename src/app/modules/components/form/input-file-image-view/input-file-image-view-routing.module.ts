import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFileImageViewComponent } from './input-file-image-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputFileImageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputFileImageViewRoutingModule { }

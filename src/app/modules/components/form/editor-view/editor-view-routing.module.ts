import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorViewComponent } from './editor-view.component';

const routes: Routes = [
  {
    path: '',
    component: EditorViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorViewRoutingModule { }

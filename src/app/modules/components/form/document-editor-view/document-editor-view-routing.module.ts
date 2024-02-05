import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentEditorViewComponent } from './document-editor-view.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentEditorViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentEditorViewRoutingModule { }

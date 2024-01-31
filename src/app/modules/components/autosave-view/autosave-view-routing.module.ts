import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosaveViewComponent } from './autosave-view.component';

const routes: Routes = [
  {
    path: '',
    component: AutosaveViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosaveViewRoutingModule { }

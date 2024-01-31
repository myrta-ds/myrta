import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruncateTextViewComponent } from './truncate-text-view.component';

const routes: Routes = [
  {
    path: '',
    component: TruncateTextViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruncateTextViewRoutingModule { }

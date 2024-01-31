import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorMessageViewComponent } from './error-message-view.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorMessageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorMessageViewRoutingModule { }

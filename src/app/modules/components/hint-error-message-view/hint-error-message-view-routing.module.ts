import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HintErrorMessageViewComponent } from './hint-error-message-view.component';

const routes: Routes = [
  {
    path: '',
    component: HintErrorMessageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HintErrorMessageViewRoutingModule { }

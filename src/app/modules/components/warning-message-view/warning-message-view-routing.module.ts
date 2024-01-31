import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarningMessageViewComponent } from './warning-message-view.component';

const routes: Routes = [
  {
    path: '',
    component: WarningMessageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarningMessageViewRoutingModule { }

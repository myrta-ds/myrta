import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPhoneViewComponent } from './input-phone-view.component';

const routes: Routes = [
  {
    path: '',
    component: InputPhoneViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputPhoneViewRoutingModule { }

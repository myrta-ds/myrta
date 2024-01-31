import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsViewComponent } from './tabs-view.component';

const routes: Routes = [
  {
    path: '',
    component: TabsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsViewRoutingModule { }

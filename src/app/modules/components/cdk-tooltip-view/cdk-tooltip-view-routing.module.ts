import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTooltipViewComponent } from './cdk-tooltip-view.component';

const routes: Routes = [
  {
    path: '',
    component: CdkTooltipViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkTooltipViewRoutingModule { }

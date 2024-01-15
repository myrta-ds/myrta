import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/pages/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'components/alert-view',
    loadChildren: () => import ('./modules/components/alert-view/alert-view.module').then(x => x.AlertViewModule)
  },
  {
    path: 'components/button-view',
    loadChildren: () => import ('./modules/components/button-view/button-view.module').then(x => x.ButtonViewModule)
  },
  {
    path: 'components/loader-view',
    loadChildren: () => import ('./modules/components/loader-view/loader-view.module').then(x => x.LoaderViewModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

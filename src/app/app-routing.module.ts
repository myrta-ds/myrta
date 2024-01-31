import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ('./modules/pages/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'components/alert',
    loadChildren: () => import ('./modules/components/alert-view/alert-view.module').then(x => x.AlertViewModule)
  },
  {
    path: 'components/button',
    loadChildren: () => import ('./modules/components/button-view/button-view.module').then(x => x.ButtonViewModule)
  },
  {
    path: 'components/loader',
    loadChildren: () => import ('./modules/components/loader-view/loader-view.module').then(x => x.LoaderViewModule)
  },
  {
    path: 'components/badges',
    loadChildren: () => import ('./modules/components/badges-view/badges-view.module').then(x => x.BadgesViewModule)
  },
  {
    path: 'components/breadcrumbs',
    loadChildren: () => import ('./modules/components/breadcrumbs-view/breadcrumbs-view.module').then(x => x.BreadcrumbsViewModule)
  },
  {
    path: 'components/link',
    loadChildren: () => import ('./modules/components/link-view/link-view.module').then(x => x.LinkViewModule)
  },
  {
    path: 'components/label',
    loadChildren: () => import ('./modules/components/label-view/label-view.module').then(x => x.LabelViewModule)
  },
  {
    path: 'components/cdk-tooltip',
    loadChildren: () => import ('./modules/components/cdk-tooltip-view/cdk-tooltip-view.module').then(x => x.CdkTooltipViewModule)
  },
  {
    path: 'components/dropdown',
    loadChildren: () => import ('./modules/components/dropdown-view/dropdown-view.module').then(x => x.DropdownViewModule)
  },
  {
    path: 'components/error-message',
    loadChildren: () => import ('./modules/components/error-message-view/error-message-view.module').then(x => x.ErrorMessageViewModule)
  },
  {
    path: 'components/hint-error-message',
    loadChildren: () => import ('./modules/components/hint-error-message-view/hint-error-message-view.module').then(x => x.HintErrorMessageViewModule)
  },
  {
    path: 'components/icon-button',
    loadChildren: () => import ('./modules/components/icon-button-view/icon-button-view.module').then(x => x.IconButtonViewModule)
  },
  {
    path: 'components/modal',
    loadChildren: () => import ('./modules/components/modal-view/modal-view.module').then(x => x.ModalViewModule)
  },
  {
    path: 'components/paginator',
    loadChildren: () => import ('./modules/components/paginator-view/paginator-view.module').then(x => x.PaginatorViewModule)
  },
  {
    path: 'components/progress',
    loadChildren: () => import ('./modules/components/progress-view/progress-view.module').then(x => x.ProgressViewModule)
  },
  {
    path: 'components/stepper',
    loadChildren: () => import ('./modules/components/stepper-view/stepper-view.module').then(x => x.StepperViewModule)
  },
  {
    path: 'components/table',
    loadChildren: () => import ('./modules/components/table-view/table-view.module').then(x => x.TableViewModule)
  },
  {
    path: 'components/tabs',
    loadChildren: () => import ('./modules/components/tabs-view/tabs-view.module').then(x => x.TabsViewModule)
  },
  {
    path: 'components/truncate-text',
    loadChildren: () => import ('./modules/components/truncate-text-view/truncate-text-view.module').then(x => x.TruncateTextViewModule)
  },
  {
    path: 'components/warning-message',
    loadChildren: () => import ('./modules/components/warning-message-view/warning-message-view.module').then(x => x.WarningMessageViewModule)
  },
  {
    path: 'components/controls-wrapper',
    loadChildren: () => import ('./modules/components/controls-wrapper-view/controls-wrapper-view.module').then(x => x.ControlsWrapperViewModule)
  },
  {
    path: 'components/form/checkbox',
    loadChildren: () => import ('./modules/components/form/checkbox-view/checkbox-view.module').then(x => x.CheckboxViewModule)
  },
  {
    path: 'components/form/checkbox-group',
    loadChildren: () => import ('./modules/components/form/checkbox-group-view/checkbox-group-view.module').then(x => x.CheckboxGroupViewModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

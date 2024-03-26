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
    loadChildren: () => import ('./modules/components/wrappers/controls-wrapper-view/controls-wrapper-view.module').then(x => x.ControlsWrapperViewModule)
  },
  {
    path: 'components/form/checkbox',
    loadChildren: () => import ('./modules/components/form/checkbox-view/checkbox-view.module').then(x => x.CheckboxViewModule)
  },
  {
    path: 'components/form/checkbox-group',
    loadChildren: () => import ('./modules/components/form/checkbox-group-view/checkbox-group-view.module').then(x => x.CheckboxGroupViewModule)
  },
  {
    path: 'components/form/input-text',
    loadChildren: () => import ('./modules/components/form/input-text-view/input-text-view.module').then(x => x.InputTextViewModule)
  },
  {
    path: 'components/form/input-textarea',
    loadChildren: () => import ('./modules/components/form/input-textarea-view/input-textarea-view.module').then(x => x.InputTextareaViewModule)
  },
  {
    path: 'components/form/input-number',
    loadChildren: () => import ('./modules/components/form/input-number-view/input-number-view.module').then(x => x.InputNumberViewModule)
  },
  {
    path: 'components/form/input-phone',
    loadChildren: () => import ('./modules/components/form/input-phone-view/input-phone-view.module').then(x => x.InputPhoneViewModule)
  },
  {
    path: 'components/form/input-search',
    loadChildren: () => import ('./modules/components/form/input-search-view/input-search-view.module').then(x => x.InputSearchViewModule)
  },
  {
    path: 'components/form/input-select',
    loadChildren: () => import ('./modules/components/form/input-select-view/input-select-view.module').then(x => x.InputSelectViewModule)
  },
  {
    path: 'components/form/input-file',
    loadChildren: () => import ('./modules/components/form/input-file-view/input-file-view.module').then(x => x.InputFileViewModule)
  },
  {
    path: 'components/form/input-file-image',
    loadChildren: () => import ('./modules/components/form/input-file-image-view/input-file-image-view.module').then(x => x.InputFileImageViewModule)
  },
  {
    path: 'components/form/input-password',
    loadChildren: () => import ('./modules/components/form/input-password-view/input-password-view.module').then(x => x.InputPasswordViewModule)
  },
  {
    path: 'components/form/input-opt',
    loadChildren: () => import ('./modules/components/form/input-opt-view/input-opt-view.module').then(x => x.InputOptViewModule)
  },
  {
    path: 'components/form/radio',
    loadChildren: () => import ('./modules/components/form/radio-view/radio-view.module').then(x => x.RadioViewModule)
  },
  {
    path: 'components/form/radio-group',
    loadChildren: () => import ('./modules/components/form/radio-group-view/radio-group-view.module').then(x => x.RadioGroupViewModule)
  },
  {
    path: 'components/form/rating',
    loadChildren: () => import ('./modules/components/form/rating-view/rating-view.module').then(x => x.RatingViewModule)
  },
  {
    path: 'components/form/switch',
    loadChildren: () => import ('./modules/components/form/switch-view/switch-view.module').then(x => x.SwitchViewModule)
  },
  {
    path: 'components/form/input-datepicker',
    loadChildren: () => import ('./modules/components/form/input-datepicker-view/input-datepicker-view.module').then(x => x.InputDatepickerViewModule)
  },
  {
    path: 'components/form/input-date-time',
    loadChildren: () => import ('./modules/components/form/input-date-time-view/input-date-time-view.module').then(x => x.InputDateTimeViewModule)
  },
  {
    path: 'components/form/input-timepicker',
    loadChildren: () => import ('./modules/components/form/input-timepicker-view/input-timepicker-view.module').then(x => x.InputTimepickerViewModule)
  },
  {
    path: 'components/form/editor',
    loadChildren: () => import ('./modules/components/form/editor-view/editor-view.module').then(x => x.EditorViewModule)
  },
  {
    path: 'components/form/document-editor',
    loadChildren: () => import ('./modules/components/form/document-editor-view/document-editor-view.module').then(x => x.DocumentEditorViewModule)
  },
  {
    path: 'components/gallery',
    loadChildren: () => import ('./modules/components/gallery-view/gallery-view.module').then(x => x.GalleryViewModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { ButtonModule } from './components/button/button.module';
import { LoaderModule } from './components/loader/loader.module';
import { AlertModule } from './components/alert/alert.module';
import { BadgesModule } from './components/badges/badges.module';
import { BreadcrumbsModule } from './components/breadcrumbs/breadcrumbs.module';
import { LabelModule } from './components/label/label.module';
import { LinkModule } from './components/link/link.module';
import { CdkTooltipModule } from './components/cdk-tooltip/cdk-tooltip.module';
import { CharsLeftModule } from './components/chars-left/chars-left.module';
import { DropdownModule } from './components/dropdown/dropdown.module';
import { ErrorMessageModule } from './components/error-message/error-message.module';
import { ContextMenuModule } from './components/context-menu/context-menu.module';
import { HintErrorMessageModule } from './components/hint-error-message/hint-error-message.module';
import { IconButtonModule } from './components/icon-button/icon-button.module';
import { ModalModule } from './components/modal/modal.module';
import { PaginatorModule } from './components/paginator/paginator.module';
import { ProgressModule } from './components/progress/progress.module';
import { SaveStateModule } from './components/save-state/save-state.module';
import { StepperModule } from './components/stepper/stepper.module';
import { TableModule } from './components/table/table.module';
import { TabsModule } from './components/tabs/tabs.module';
import { TooltipModule } from './components/tooltip/tooltip.module';
import { TruncateTextModule } from './components/truncate-text/truncate-text.module';
import { WarningMessageModule } from './components/warning-message/warning-message.module';
import { PagesNavModule } from './components/pages-nav/pages-nav.module';
import { GalleryModule } from './components/gallery/gallery.module';

import { CheckboxModule } from './components/form/checkbox/checkbox.module';
import { CheckboxGroupModule } from './components/form/checkbox-group/checkbox-group.module';
import { RadioModule } from './components/form/radio/radio.module';
import { RatingModule } from './components/form/rating/rating.module';
import { SwitchModule } from './components/form/switch/switch.module';
import { EditorModule } from './components/form/editor/editor.module';
import { DocumentEditorModule } from './components/form/document-editor/document-editor.module';

import { InputTextModule } from './components/form/input-text/input-text.module';
import { InputTextareaModule } from './components/form/input-textarea/input-textarea.module';
import { InputNumberModule } from './components/form/input-number/input-number.module';
import { InputPhoneModule } from './components/form/input-phone/input-phone.module';
import { InputSearchModule } from './components/form/input-search/input-search.module';
import { InputSelectModule } from './components/form/input-select/input-select.module';
import { InputFileModule } from './components/form/input-file/input-file.module';
import { InputFileImageModule } from './components/form/input-file-image/input-file-image.module';
import { InputOptModule } from './components/form/input-opt/input-opt.module';
import { InputPasswordModule } from './components/form/input-password/input-password.module';
import { InputDatepickerModule } from './components/form/input-datepicker/input-datepicker.module';
import { InputDateTimeModule } from "./components/form/input-date-time/input-date-time.module";
import { InputTimepickerModule } from './components/form/input-timepicker/input-timepicker.module';

import { ContentWrapperModule } from './components/wrappers/content-wrapper/content-wrapper.module';
import { ControlsWrapperModule } from './components/wrappers/controls-wrapper/controls-wrapper.module';
import { WidgetWrapperModule } from './components/wrappers/widget-wrapper/widget-wrapper.module';

import { TruncateModule } from './pipes/truncate/truncate.module';
import { DateFormatModule } from './pipes/date/date-format.module';
import { CurrencyModule } from './pipes/currency/currency.module';
import { SafeModule } from './pipes/safe/safe.module';
import { PhoneFormatModule } from './pipes/phone/phone-format.module';

import { TruncateDirectiveModule } from './directives/truncate/truncate.module';

// import { SaveStoreModule } from './services/save-store/save-store.module';

const MODULES = [
  ButtonModule,
  LoaderModule,
  AlertModule,
  BadgesModule,
  BreadcrumbsModule,
  LabelModule,
  LinkModule,
  CdkTooltipModule,
  ContextMenuModule,
  CharsLeftModule,
  DropdownModule,
  ErrorMessageModule,
  HintErrorMessageModule,
  IconButtonModule,
  ModalModule,
  PaginatorModule,
  ProgressModule,
  SaveStateModule,
  StepperModule,
  TableModule,
  TabsModule,
  TooltipModule,
  TruncateTextModule,
  WarningMessageModule,
  PagesNavModule,
  GalleryModule,

  // FORM
  EditorModule,
  DocumentEditorModule,
  CheckboxModule,
  CheckboxGroupModule,
  RadioModule,
  RatingModule,
  SwitchModule,

  InputTextModule,
  InputTextareaModule,
  InputNumberModule,
  InputPhoneModule,
  InputSearchModule,
  InputDatepickerModule,
  InputDateTimeModule,
  InputTimepickerModule,
  InputSelectModule,
  InputFileModule,
  InputFileImageModule,
  InputOptModule,
  InputPasswordModule,

  // WRAPPERS
  WidgetWrapperModule,
  ContentWrapperModule,
  ControlsWrapperModule,

  // PIPES
  TruncateModule,
  DateFormatModule,
  CurrencyModule,
  SafeModule,
  PhoneFormatModule,

  // DIRECTIVES
  TruncateDirectiveModule,

  // SERVICES
  // SaveStoreModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MyrtaUiModule {
}

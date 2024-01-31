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
import { ContentWrapperModule } from './components/wrappers/content-wrapper/content-wrapper.module';
import { ControlsWrapperModule } from './components/wrappers/controls-wrapper/controls-wrapper.module';
import { StepperModule } from './components/stepper/stepper.module';
import { TableModule } from './components/table/table.module';
import { TabsModule } from './components/tabs/tabs.module';
import { TruncateTextModule } from './components/truncate-text/truncate-text.module';
import { WarningMessageModule } from './components/warning-message/warning-message.module';
import { CheckboxModule } from './components/form/checkbox/checkbox.module';
import { CheckboxGroupModule } from './components/form/checkbox-group/checkbox-group.module';

@NgModule({
  imports: [
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
    TruncateTextModule,
    WarningMessageModule,
    ContentWrapperModule,
    ControlsWrapperModule,
    CheckboxModule,
    CheckboxGroupModule,
  ],
  exports: [
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
    TruncateTextModule,
    WarningMessageModule,
    ContentWrapperModule,
    ControlsWrapperModule,
    CheckboxModule,
    CheckboxGroupModule,
  ]
})
export class MyrtaUiModule { }

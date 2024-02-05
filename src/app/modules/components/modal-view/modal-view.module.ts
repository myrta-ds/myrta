import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalViewRoutingModule } from './modal-view-routing.module';
import { ModalViewComponent } from './modal-view.component';
import { ModalModule, ButtonModule, LabelModule, ContentWrapperModule, InputTextModule } from '../../../../../projects/myrta-ui/src/public-api';
import { SmallModalComponent } from './modals/small-modal/small-modal.component';
import { MediumModalComponent } from './modals/medium-modal/medium-modal.component';
import { LargeModalComponent } from './modals/large-modal/large-modal.component';
import { ExtraLargeModalComponent } from './modals/extra-large-modal/extra-large-modal.component';
import { DefaultModalComponent } from './modals/default-modal/default-modal.component';
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { AttentionModalComponent } from './modals/attention-modal/attention-modal.component';
import { NegativeModalComponent } from './modals/negative-modal/negative-modal.component';
import { ContentModalComponent } from './modals/content-modal/content-modal.component';
import { SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  declarations: [
    ModalViewComponent,
    SmallModalComponent,
    MediumModalComponent,
    LargeModalComponent,
    ExtraLargeModalComponent,
    DefaultModalComponent,
    InfoModalComponent,
    AttentionModalComponent,
    NegativeModalComponent,
    ContentModalComponent
  ],
  imports: [
    CommonModule,
    ModalViewRoutingModule,
    SimpleModalModule,
    ContentWrapperModule,
    ModalModule,
    ButtonModule,
    InputTextModule,
    LabelModule
  ]
})
export class ModalViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';
import { ButtonModule } from '../button/button.module';
import { InputTextareaModule } from '../form/input-textarea/input-textarea.module';
import { LoaderModule } from '../loader/loader.module';
import { ModalModule } from '../modal/modal.module';
import { GalleryConfirmModalComponent } from './components/gallery-confirm-modal/gallery-confirm-modal.component';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent,
    GalleryConfirmModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextareaModule,
    LoaderModule,
    ModalModule
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }

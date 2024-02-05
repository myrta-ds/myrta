import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileImageComponent } from './input-file-image.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FileImageEditModalComponent } from './components/file-image-edit-modal/file-image-edit-modal.component';
import { ModalModule } from '../../modal/modal.module';
import { ButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [
    InputFileImageComponent,
    FileImageEditModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxFileDropModule,
    ModalModule,
    ButtonModule,
    SimpleModalModule.forRoot({
      container: (() => document.querySelector('.page-wrapper') as HTMLElement)()}
    ),
    ImageCropperModule
  ],
  exports: [
    InputFileImageComponent
  ]
})
export class InputFileImageModule { }

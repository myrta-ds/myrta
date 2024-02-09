import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { CropperSettings, ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';
import { convertBase64ToFile } from '../../../../../helpers/extension/input-file.extension';

export interface ImageEditSelect {
  title: string;
  fileImage?: any
}

export interface ImageEditResult {
  result: boolean,
  fileImage?: any,
  fileUrl?: string
}

@Component({
  selector: 'mrx-file-image-edit-modal',
  templateUrl: './file-image-edit-modal.component.html',
  styleUrls: ['./file-image-edit-modal.component.less']
})

export class FileImageEditModalComponent
  extends SimpleModalComponent<ImageEditSelect, ImageEditResult> {

  title!: string;
  fileImage?: any;
  imageChangedEvent: any = '';
  croppedImage = '';
  canvasRotation = 0;
  transform: ImageTransform = {};
  cropperSettings!: CropperSettings;

  constructor() {
    super();
    this.result = {result: false};
  }

  public ok() {
    this.result = {
      result: true,
      fileImage: convertBase64ToFile(
        this.croppedImage,
        this.fileImage.name,
        this.fileImage.type
      ),
      fileUrl: this.croppedImage
    };
    this.close();
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent): void {
    if (event.base64) {
      this.croppedImage = event.base64;
    }
  }

  imageLoaded(image: LoadedImage) {
    // console.log(image)
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }
}

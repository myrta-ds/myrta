import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface GalleryConfirmParams {
  title: string;
  message: string;
}

export interface GalleryConfirmResult {
  result: boolean;
}

@Component({
  selector: 'app-gallery-confirm-modal',
  templateUrl: './gallery-confirm-modal.component.html',
})
export class GalleryConfirmModalComponent extends SimpleModalComponent<GalleryConfirmParams, GalleryConfirmResult> {

  title!: string;
  message!: string;

  constructor() {
    super();
    this.result = {result: false};
  }

  ok() {
    this.result = {result: true};
    this.close();
  }
}

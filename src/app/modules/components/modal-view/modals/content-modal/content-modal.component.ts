import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface ContentModalParams {
  title: string;
}

export interface ContentModalResult {
  result: boolean;
}

@Component({
  selector: 'app-content-modal',
  templateUrl: './content-modal.component.html'
})
export class ContentModalComponent extends SimpleModalComponent<ContentModalParams, ContentModalResult> {
  public title: string | undefined;

  constructor() {
    super();
    this.result = { result: false };
  }

  public ok() {
    this.result = { result: true };
    this.close();
  }
}

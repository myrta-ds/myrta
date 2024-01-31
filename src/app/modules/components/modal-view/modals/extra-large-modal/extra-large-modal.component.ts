import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface ExtraLargeModalParams {
  title: string;
  message: string;
}

export interface ExtraLargeModalResult {
  result: boolean;
}

@Component({
  selector: 'app-extra-large-modal',
  templateUrl: './extra-large-modal.component.html'
})
export class ExtraLargeModalComponent extends SimpleModalComponent<ExtraLargeModalParams, ExtraLargeModalResult> {
  public title: string | undefined;
  public message: string | undefined;

  constructor() {
    super();
    this.result = { result: false };
  }

  public ok() {
    this.result = { result: true };
    this.close();
  }
}

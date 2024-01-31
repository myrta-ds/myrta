import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface LargeModalParams {
  title: string;
  message: string;
}

export interface LargeModalResult {
  result: boolean;
}

@Component({
  selector: 'app-large-modal',
  templateUrl: './large-modal.component.html'
})
export class LargeModalComponent extends SimpleModalComponent<LargeModalParams, LargeModalResult> {
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

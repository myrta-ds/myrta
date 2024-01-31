import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface SmallModalParams {
  title: string;
  message: string;
}

export interface SmallModalResult {
  result: boolean;
}

@Component({
  selector: 'app-small-modal',
  templateUrl: './small-modal.component.html'
})
export class SmallModalComponent extends SimpleModalComponent<SmallModalParams, SmallModalResult> {
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

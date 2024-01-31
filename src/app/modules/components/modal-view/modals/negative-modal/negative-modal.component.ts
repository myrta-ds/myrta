import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface NegativeModalParams {
  title: string;
  message: string;
}

export interface NegativeModalResult {
  result: boolean;
}

@Component({
  selector: 'app-negative-modal',
  templateUrl: './negative-modal.component.html'
})
export class NegativeModalComponent extends SimpleModalComponent<NegativeModalParams, NegativeModalResult> {
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

import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface AttentionModalParams {
  title: string;
  message: string;
}

export interface AttentionModalResult {
  result: boolean;
}

@Component({
  selector: 'app-attention-modal',
  templateUrl: './attention-modal.component.html'
})
export class AttentionModalComponent extends SimpleModalComponent<AttentionModalParams, AttentionModalResult> {
  public title: string | undefined;
  public message: string | undefined;
  public list = [ 'a', 'b' ];

  constructor() {
    super();
    this.result = { result: false };
  }

  public ok() {
    this.result = { result: true };
    this.close();
  }

}

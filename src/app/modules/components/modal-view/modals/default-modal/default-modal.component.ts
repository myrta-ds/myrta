import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface DefaultModalParams {
  title: string;
  message: string;
}

export interface DefaultModalResult {
  result: boolean;
}

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.component.html'
})
export class DefaultModalComponent extends SimpleModalComponent<DefaultModalParams, DefaultModalResult> {
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

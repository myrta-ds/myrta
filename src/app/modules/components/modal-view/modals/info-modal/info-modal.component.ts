import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface InfoModalParams {
  title: string;
  message: string;
}

export interface InfoModalResult {
  result: boolean;
}

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html'
})
export class InfoModalComponent extends SimpleModalComponent<InfoModalParams, InfoModalResult> {
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

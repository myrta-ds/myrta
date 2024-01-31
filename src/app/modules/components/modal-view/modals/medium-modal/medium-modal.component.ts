import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface MediumModalParams {
  title: string;
  message: string;
}

export interface MediumModalResult {
  result: boolean;
}

@Component({
  selector: 'app-medium-modal',
  templateUrl: './medium-modal.component.html'
})
export class MediumModalComponent extends SimpleModalComponent<MediumModalParams, MediumModalResult> {
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

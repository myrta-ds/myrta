import { Component } from '@angular/core';

@Component({
  selector: 'mrx-hint-error-message-view',
  templateUrl: './hint-error-message-view.component.html',
  styleUrls: ['./hint-error-message-view.component.less']
})
export class HintErrorMessageViewComponent {
  public checkInvalid = false
  public value1: string | number = ''
  public value2: string | number = ''
  public value3: string | number = ''
  public value4: string | number = ''

  public error1: string | number = ''
  public error2: string | number = ''
  public error3: string | number = ''
  public error4: string | number = ''

  public isVisible = false

  public changeValue1(e: any): void {
    this.value1 = e
  }

  public changeValue2(e: any): void {
    this.value2 = e
  }

  public changeValue3(e: any): void {
    this.value3 = e
  }

  public changeValue4(e: any): void {
    this.value4 = e
  }

  public getNumber(value2: number | string): number {
    return Number(value2);
  }

  verify() {
    this.isVisible = true
    this.checkInvalid = true
    this.error1 = this.value1
    this.error2 = this.value2
    this.error3 = this.value3
    this.error4 = this.value4
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'mrx-input-date-time-view',
  templateUrl: './input-date-time-view.component.html',
  styleUrls: ['./input-date-time-view.component.less']
})
export class InputDateTimeViewComponent {
  public date = '2023-04-26T13:31:41.827751'
  public value1 = ''
  public value2 = ''
  public value3 = ''
  public value = '2022-01-04T04:01:59.595Z'

  public changeValue1(val: any) {
    console.log('val', val)
    this.value1 = val
  }

  public changeValue2(val: any) {
    console.log('val', val)
    this.value2 = val
  }

  public changeValue3(val: any) {
    console.log('val', val)
    this.value3 = val
  }

  public clean(): void {
    this.value1 = ''
  }
}

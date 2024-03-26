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

  public minDate = '2022-01-01T04:01:59.595Z'
  public maxDate = '2022-01-08T04:01:59.595Z'

  public index = 0

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
    this.value = ''
  }

  randRange() {
    this.value = ''

    if (this.index === 0) {
      this.minDate = '2022-01-02T04:01:59.595Z'
      this.maxDate = '2022-01-09T04:01:59.595Z'
    } else if (this.index === 1) {
      this.minDate = '2022-01-03T04:01:59.595Z'
      this.maxDate = '2022-01-10T04:01:59.595Z'
    } else if (this.index === 2) {
      this.minDate = '2022-01-04T04:01:59.595Z'
      this.maxDate = '2022-01-11T04:01:59.595Z'
    }

    if (this.index === 2) {
      this.index = 0
    } else {
      this.index++
    }
  }

  changeValue(event: any) {
    this.value = event
  }
}

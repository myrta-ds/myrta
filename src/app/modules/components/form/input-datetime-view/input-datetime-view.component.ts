import { Component } from '@angular/core';

@Component({
  selector: 'mrx-input-datetime-view',
  templateUrl: './input-datetime-view.component.html',
  styleUrls: ['./input-datetime-view.component.less']
})
export class InputDatetimeViewComponent {
  public emptyValue = ''
  public value = '2022-10-21T21:00:40.415Z'
  public rangeValue = ['2022-10-21T21:00:40.415Z', '2022-10-24T21:00:40.415Z']
  public multiValue = ''
  public emptyMultiValue = ''

  firsDate = ''
  secondDate = ''
  // 2022-12-08T21:00:00.000Z
  public changeValue(val: any) {
    console.log(val)
    this.value = val
  }

  public changeEmptyValue(val: any) {
    console.log(val)
    this.emptyValue = val
  }

  public changeMultiValue(val: any) {
    console.log(val)
    this.multiValue = val
  }

  public changeEmptyMultiValue(val: any) {
    console.log(val)
    this.emptyMultiValue = val
  }

  public changeRangeValue(val: any) {
    console.log(val)
    this.rangeValue = val
  }

  public startValue(val: any) {
    this.firsDate = val
    console.log(this.firsDate)
  }

  public endValue(val: any) {
    this.secondDate = val
    console.log(this.secondDate)
  }
}

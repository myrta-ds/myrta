import { Component } from '@angular/core';

@Component({
  selector: 'mrx-input-date-view',
  templateUrl: './input-date-view.component.html',
  styleUrls: ['./input-date-view.component.less']
})
export class InputDateViewComponent {
  public value = '2022-01-04T04:01:59.595Z'
  public startDate = ''
  public endDate = ''
  public startDate2 = ''
  public endDate2 = ''
  public startDate3 = ''
  public endDate3 = ''
  public firstValue = ''
  public secondValue = ''

  public changeNewValue(e: any, value: 'firstValue' | 'secondValue') {
    console.log('TimeValue', e)
    this[value] = e
  }

  public changeStartValue(value: any) {
    console.log('startDate', value)
    this.startDate = value
  }
  public changeEndValue(value: any) {
    console.log('endDate', value)
    this.endDate = value
  }

  public changeStartValue2(value: any) {
    console.log('startDate', value)
    this.startDate2 = value
  }
  public changeEndValue2(value: any) {
    console.log('endDate', value)
    this.endDate2 = value
  }

  public changeStartValue3(value: any) {
    console.log('startDate', value)
    this.startDate3 = value
  }
  public changeEndValue3(value: any) {
    console.log('endDate', value)
    this.endDate3 = value
  }

  public changeValue(value: any) {
    console.log('changeValue', value)
    this.value = value
  }
}

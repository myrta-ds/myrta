import { Component } from '@angular/core';

@Component({
  selector: 'mrx-rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.less']
})
export class RatingViewComponent {
  public value1 = 4.3
  public value2 = 1.9
  public value3 = 3
  public value4 = 4

  changeValue(value: number, field: 'value1' | 'value2' | 'value3' | 'value4') {
    console.log(value)
    this[field] = value
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'mrx-radio-view',
  templateUrl: './radio-view.component.html',
  styleUrls: ['./radio-view.component.less']
})
export class RadioViewComponent {
  public value = 0

  public changeValue(value: any) {
    console.log(value)
  }
}

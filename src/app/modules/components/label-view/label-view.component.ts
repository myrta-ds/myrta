import { Component } from '@angular/core';

@Component({
  selector: 'mrx-label-view',
  templateUrl: './label-view.component.html',
  styleUrls: ['./label-view.component.less']
})
export class LabelViewComponent {
  public changeCheckboxValue(e: boolean): void {
    console.log(e)
  }
}

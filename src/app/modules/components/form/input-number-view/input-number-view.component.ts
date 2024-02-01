import { Component } from '@angular/core';
import { InputNumberType } from '../../../../../../projects/myrta-ui/src/public-api';

@Component({
  selector: 'mrx-input-number-view',
  templateUrl: './input-number-view.component.html',
  styleUrls: ['./input-number-view.component.less']
})
export class InputNumberViewComponent {
  public value = 123456789
  public type: InputNumberType = 'int'

  changeValue(event: any) {
    console.log(event)
  }
}

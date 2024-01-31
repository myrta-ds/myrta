import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrx-chars-left',
  templateUrl: './chars-left.component.html',
  styleUrls: ['./chars-left.component.less']
})
export class CharsLeftComponent {
  @Input() public maxlength = 0;
  @Input() public valueLength = 0;
  @Input() public value = '';

  public get getValueLength(): number {
    return this.value ? this.value.length : this.valueLength
  }

  // get charsLeft(): number {
  //   if (this.value) {
  //     return this.maxlength - this.value.length;
  //   } else if (this.valueLength) {
  //     return this.maxlength - this.valueLength;
  //   }
  //
  //   return this.maxlength;
  // }
}

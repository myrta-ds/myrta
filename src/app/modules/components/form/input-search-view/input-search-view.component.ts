import { Component } from '@angular/core';

@Component({
  selector: 'mrx-input-search-view',
  templateUrl: './input-search-view.component.html',
  styleUrls: ['./input-search-view.component.less']
})
export class InputSearchViewComponent {
  public textValueEmpty: string = ''
  public textValue: string = 'text text'

  public changeTextValueEmpty(value: string): void {
    console.log(value)
    this.textValueEmpty = value
  }

  public changeTextValue(value: string): void {
    console.log(value)
    this.textValue = value
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrx-input-textarea-view',
  templateUrl: './input-textarea-view.component.html',
  styleUrls: ['./input-textarea-view.component.less']
})
export class InputTextareaViewComponent implements OnInit {
  public textValueEmpty: string = ''
  public textValue: string = 'text text text text text text text text text text text text text text text text'

  public changeTextValueEmpty(value: string): void {
    console.log(value)
    this.textValueEmpty = value
  }

  public changeTextValue(value: string): void {
    console.log(value)
    this.textValue = value
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.textValueEmpty = this.textValue
    }, 3000)
  }
}

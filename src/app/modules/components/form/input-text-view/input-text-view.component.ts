import { Component, OnInit } from '@angular/core';
import { MrxFormValidator } from 'myrtex-mf-ui';

@Component({
  selector: 'mrx-input-text-view',
  templateUrl: './input-text-view.component.html',
  styleUrls: ['./input-text-view.component.less']
})
export class InputTextViewComponent implements OnInit {
  public textValueEmpty = ''
  public textValue = 'text text'
  public model = {
    name: ''
  }

  public form = new MrxFormValidator({
    method: 'input',
    messages: {
      required: () => 'Поле обязательно для заполнения!!!'
    }
  })

  ngOnInit(): void {
    this.form.initFields(this.model, {
      name: {
        required: true,
        maxLength: 3,
        messages: {
          required: 'Шо случилося???'
        }}
    })
  }

  public changeTextValueEmpty(value: string): void {
    this.form.initModelChanged(this.model)
    console.log(value)
    this.textValueEmpty = value
  }

  public changeTextValue(value: string): void {
    console.log(value)
    this.textValue = value
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'mrx-input-select-view',
  templateUrl: './input-select-view.component.html',
  styleUrls: ['./input-select-view.component.less']
})
export class InputSelectViewComponent {
  public selected = [{ id: 0, label: 'Первый' }];
  public value1 = {
    id: 0,
    label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  };
  public value2 = [{
    id: 0,
    label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }];
  public selectItems = [
    { id: 0, label: 'Первый' },
    { id: 1, label: 'Второй' },
    { id: 2, label: 'Третий' },
  ];

  public items = [
    {
      id: 0,
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 1,
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 2,
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 3,
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      id: 4,
      label: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    { id: 5, label: 'Первый' },
    { id: 6, label: 'Второй' },
    { id: 7, label: 'Третий' }
  ];

  addTagFn = (term: any) => {
    console.log(term);
    if (false) {
      return term;
    }
    return null;
  };

  public get getInvalid(): boolean {
    return !this.selected.length;
  }

  public changeValue(value: any) {
    this.selected = value;
  }

  public changeValue1(value: any) {
    this.value1 = value;
  }

  public changeValue2(value: any) {
    this.value2 = value;
  }

  public logger(event: any) {
    console.log(event);
  }
}

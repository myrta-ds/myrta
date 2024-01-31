import { Component } from '@angular/core';

@Component({
  selector: 'mrx-checkbox-group-view',
  templateUrl: './checkbox-group-view.component.html',
  styleUrls: ['./checkbox-group-view.component.less']
})
export class CheckboxGroupViewComponent {
  public groupCheckboxModel1 = {
    sortable: true,
    searchable: true,
    scrollable: true,
    values: [
      { id: 0, text: 'первый', value: true, type: 'single', parentId: null, array: [] },
      { id: 1, text: 'второй', value: false, type: 'single', parentId: null, array: [] },
      { id: 2, text: 'третий', value: true, type: 'single', parentId: null, array: [] }
    ]
  }

  public groupCheckboxModel2 = {
    sortable: true,
    searchable: true,
    scrollable: true,
    values: [
      { id: 0, text: 'первый', value: false, type: 'single', parentId: null, array: [] },
      { id: 1, text: 'второй', value: false, type: 'single', parentId: null, array: [] },
      { id: 2, text: 'третий', value: false, type: 'single', parentId: null, array: [] },
      {
        id: 3,
        text: 'четвертый',
        value: null,
        type: 'array',
        parentId: null,
        array: [
          { id: 4, text: 'Пятый', value: true, type: 'single', parentId: 3, array: [] },
          { id: 5, text: 'Шестой', value: false, type: 'single', parentId: 3, array: [] },
          { id: 6, text: 'Седьмой', value: false, type: 'single', parentId: 3, array: [] },
          {
            id: 7,
            text: 'восьмой',
            value: false,
            type: 'array',
            parentId: 3,
            array: [
              { id: 8, text: 'девятый', value: false, type: 'single', parentId: 7, array: [] },
              { id: 9, text: 'десятый', value: false, type: 'single', parentId: 7, array: [] },
              { id: 10, text: 'одинадцатый', value: false, type: 'single', parentId: 7, array: [] },
            ]
          },
          {
            id: 11,
            text: 'двенадцатый',
            value: false,
            type: 'array',
            parentId: 3,
            array: [
              { id: 12, text: 'тринадцатый', value: false, type: 'single', parentId: 11, array: [] },
              { id: 13, text: 'четырнадцатый', value: false, type: 'single', parentId: 11, array: [] },
              { id: 14, text: 'пятьнадцатый', value: false, type: 'single', parentId: 11, array: [] },
              {
                id: 15,
                text: 'шестьнадцатый',
                value: false,
                type: 'array',
                parentId: 11,
                array: [
                  { id: 16, text: 'третий', value: false, type: 'single', parentId: 15, array: [] },
                  { id: 17, text: 'третий', value: false, type: 'single', parentId: 15, array: [] },
                  { id: 18, text: 'третий', value: false, type: 'single', parentId: 15, array: [] },
                ]
              },
            ]
          },
        ]
      },
    ]
  }


  changeModel2(event: any) {
    this.groupCheckboxModel2.values = event
  }

  logger(value: any) {
    console.log(value);
  }
}

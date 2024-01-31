import { Component } from '@angular/core';
import {
  PagerSettings,
  DataStateChangeEvent,
  ContentSettings,
  HeaderSettings,
  PaginatorSettings,
  SortDescriptor,
  TableType
} from '../../../../../projects/myrta-ui/src/public-api'
import { data } from './constants/data';

@Component({
  selector: 'mrx-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.less']
})
export class TableViewComponent {
  public isLoading = false
  public data = data

  public sort: SortDescriptor = {
    col: 'id',
    dir: 'asc'
  }

  public type: TableType = 'default'

  public headerSettings: HeaderSettings = {
    type: 'default',
    sort: true,
    count: true,
    toggle: true,
    background: false,
    substrate: true
  }

  public paginatorSettings: PaginatorSettings = {
    substrate: true
  }

  public contentSettings: ContentSettings = {
    substrate: true
  }

  public totalSteps = 24
  public currentStep = 20

  public pageable: PagerSettings = {
    pageSizes: [10, 20, 30],
    withPageSize: true
  }

  public tabs = [
    {
      id: 0,
      title: 'Первый',
      active: true
    },
    {
      id: 1,
      title: 'Второй',
      active: false
    },
    {
      id: 2,
      title: 'Третий',
      active: false
    }
  ]

  public firstProgressValue = 50
  public secondProgressValue = 20

  onTabClick(tabIndex: number) {
    this.tabs.forEach(tab => {
      tab.active = false

      if (tab.id === tabIndex) {
        tab.active = true
      }
    })
  }

  changeFirstValue() {
    this.firstProgressValue = Math.floor(Math.random() * 100)
  }

  changeSecondValue() {
    this.secondProgressValue = Math.floor(Math.random() * 100)
  }

  changeTypeTable(type: TableType) {
    this.type = type
  }

  changeState(event: DataStateChangeEvent) {
    console.log(event);
  }
}

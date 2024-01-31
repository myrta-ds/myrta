import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { ContentSettings, HeaderSettings, PaginatorSettings, SortDescriptor, TableBodyItem, TableType, TableTypeEnum } from './table.enum';
import { ColumnComponent } from './components/column/column.component';
import { PagerSettings } from './models/pager-settings';
import { DefaultPagerSettings } from './default/default-pager-settings';
import { DataStateChangeEvent } from './models/data-state-change.event';
import { PaginateOutputObject } from '../paginator/paginator.enum';
import { animate, group, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mrx-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  animations: [
    trigger('visibleLoading', [
      state('in', style({ opacity: 1, visibility: 'visible' })),
      state('out', style({ opacity: 0, visibility: 'hidden' })),
      transition('in => out', [group([
        animate('300ms ease-in-out', style({ opacity: 0 })),
        animate('300ms ease-in-out', style({ visibility: 'hidden' }))
      ]
      )]),
      transition('out => in', [group([
        animate('1ms ease-in-out', style({ visibility: 'visible' })),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ]
      )])
    ])
  ]
})
export class TableComponent implements AfterViewInit {
  public colArray: ColumnComponent[] = [];
  public pageable: PagerSettings | null = DefaultPagerSettings;
  public selectedSort = ''
  public init = false

  @ContentChildren(ColumnComponent) contentChildren!: QueryList<ColumnComponent>;
  @ContentChild('templateCard') templateCard!: TemplateRef<any>;
  @ContentChild('emptyResultMsgTemplate') emptyResultMsgTemplate!: TemplateRef<any>;

  @Input() type: TableType = 'default';
  @Input() data!: TableBodyItem[];
  @Input() pageSize = 20;
  @Input() currentPage = 1;
  @Input() total = 0;
  @Input() link = '';
  @Input() isLoading = false;

  @Input() sort: SortDescriptor | undefined;
  @Input() trackById = 'id';
  @Input() sortable = true;
  @Input() striped = true;
  @Input() customClasses = ''
  @Input() emptyResultMsg = ''

  @Input() autoHeight = true

  @Input() headerSettings: HeaderSettings | undefined

  @Input() contentSettings: ContentSettings = {
    substrate: false
  }

  @Input() paginatorSettings: PaginatorSettings = {
    substrate: false
  }

  // Проверить и вырезать
  public selectedItem = 1

  @Input('pageable')
  public set setPageable(value: PagerSettings | boolean) {
    if (value === true) {
      this.pageable = DefaultPagerSettings;
    } else if (value === false) {
      this.pageable = null;
    } else {
      this.pageable = value;
    }
  }

  @Output() dataStateChanged: EventEmitter<DataStateChangeEvent> =
    new EventEmitter<DataStateChangeEvent>();
  @Output() downloadData: EventEmitter<Event> = new EventEmitter<Event>()
  @Output() changeTypeTable: EventEmitter<TableType> = new EventEmitter<TableType>()
  @Output() change: EventEmitter<Event> = new EventEmitter<Event>()

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
    this.colArray = this.contentChildren.toArray();

    this.colArray.forEach(item => {
      if (this.sort && this.sort.col === item.name) {
        this.selectedSort = item.name
      }
    })

    this.colArray = this.colArray.filter(item => {
      return item.name !== '' && item.sortLabel
    })

    this.changeDetector.detectChanges()
    this.init = true

    if (this.autoHeight) {
      document.querySelectorAll('.td-content-wrapper').forEach((wrapper: Element) => {
        const tdHeight = wrapper.closest('td')?.scrollHeight
        const link = wrapper as HTMLElement
        link.style.height = tdHeight + 'px'
      })
    }
  }

  public get getClasses(): string {
    return `${ TableTypeEnum[this.type] } ${ this.customClasses }`;
  }

  trackByFn(index: number, item: any): string {
    return item[this.trackById];
  }

  public changeSort() {
    const newEventData: DataStateChangeEvent = { page: this.currentPage, pageSize: this.pageSize };

    if (!this.colArray.length) {
      return
    }

    if (this.sort) {
      newEventData.sort = {
        dir: this.sort.dir === 'desc' ? 'asc' : 'desc',
        col: this.sort.col
      };
    } else {
      newEventData.sort = {
        dir: 'asc',
        col: this.colArray[0].name
      };
    }

    this.dataStateChanged.emit(newEventData);
  }

  public columnSortedDir(column: string): string {
    if (this.sort && this.sort.col == column && this.sort.dir) {
      return this.sort.dir;
    }
    return '';
  }

  public onSortColumn(column: string, sortable: boolean): void {
    if (!sortable) {
      return;
    }

    const newEventData: DataStateChangeEvent = { page: this.currentPage, pageSize: this.pageSize };

    if (this.sort && this.sort.col == column) {
      if (this.sort.dir && this.sort.dir === 'asc') {
        newEventData.sort = { dir: 'desc', col: column };
      }
    } else {
      newEventData.sort = { dir: 'asc', col: column };
    }

    this.dataStateChanged.emit(newEventData);
  }

  public clickToDownload(event: Event): void {
    this.downloadData.emit(event)
  }

  public updateSortSelect(value: any): void {
    const newEventData: DataStateChangeEvent = {
      page: this.currentPage,
      pageSize: this.pageSize,
      sort: {
        col: value.name,
        dir: this.sort?.dir
      }
    };

    this.dataStateChanged.emit(newEventData)
  }

  public onDataStatePaginatorChanged(pagination: PaginateOutputObject): void {
    const newEventData: DataStateChangeEvent = {
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    };

    if (this.sort && this.sort.col && this.sort.dir) {
      newEventData.sort = { dir: this.sort.dir, col: this.sort.col };
    }

    this.dataStateChanged.emit(newEventData);
  }

  public getLinkForStroke(link: string, dataItem: TableBodyItem) {
    // регулярки
    const regExpParams = /(?<=\[)[^\s\[\]]+(?=])/gi;
    // основной массив
    const linkArray = link.split('?')
    // массивы строк url и параметров
    const arrayUrl = linkArray[0]?.split('/')
    const searchParams = linkArray[1]?.split('&')
    const searchParamsObj = searchParams?.map((str) => {
      const strParamData = str.split('=')[1].match(regExpParams)
      return {
        name: str.split('=')[0],
        data: strParamData ? strParamData[0] : str.split('=')[0],
      }
    })
    // const arrayParams = linkArray[1]?.match(regExpParams)

    // обработка тела url
    const strUrl = arrayUrl.map((str) => {
      if (str.match(regExpParams)) {
        // @ts-ignore
        return dataItem[str.match(regExpParams)[0]]
      } else {
        return str
      }
    }).join('/')
    // обработка параметров
    // если есть параметры - возвращаем их строкой с динамическими параметрами

    const strParams = searchParamsObj ? searchParamsObj.map((param, index: number) => {
      return `${ index > 0 ? '' : '?' }${ param.name }=${ dataItem[param.data] }`
    }).join('&') : ''

    // const strParams = arrayParams ? arrayParams.map((str, index) => {
    //   return `${index > 0 ? '' : '?'}${str}=${dataItem[str]}`
    // }).join('&') : ''

    return `${ strUrl }${ strParams }`
  }

  public onChangeTypeTable(type: TableType): void {
    this.changeTypeTable.emit(type)
  }

  // public getHeightForTD(tableTD: HTMLElement) {
  //   return tableTD.scrollHeight
  // }
}

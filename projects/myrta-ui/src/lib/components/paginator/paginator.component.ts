import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  PaginateOutputObject,
  PaginatorItem,
  PaginatorPosition, PaginatorPositionCss,
} from './paginator.enum';

@Component({
  selector: 'mrx-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent {
  public position: PaginatorPosition | undefined = 'centered';
  public withPageSize: boolean | undefined = true;

  @Input() pageSizes: number[] = [20, 50, 100];
  @Input() currentPage = 1;
  @Input() pageSize = 20;
  @Input() total = 0;
  @Input() customClasses = '';

  @Input('position')
  public set setPosition(value: PaginatorPosition | undefined) {
    this.position = value || 'centered';
  }

  @Input('withPageSize')
  public set setWithPageSize(value: boolean | undefined) {
    this.withPageSize = value || false;
  }

  @Output() dataStateChanged: EventEmitter<PaginateOutputObject> = new EventEmitter<PaginateOutputObject>();

  public get getClasses(): string {
    return `${this.position && PaginatorPositionCss[this.position]} ${this.customClasses}`;
  }

  public get getItems(): number {
    return Math.ceil(this.total / this.pageSize);
  }

  public get getNumbers(): PaginatorItem[] {
    return Array(this.getItems)
      .fill(1)
      .map((item, index) => ({ index: index + 1, active: index + 1 === this.currentPage }));
  }

  public get getViewItems(): PaginatorItem[] {
    return this.getNumbers.filter((item, index) => {
      if (this.currentPage === 1 && this.currentPage < this.getItems) {
        return item.index === this.currentPage ||
          item.index === this.currentPage + 1 ||
          item.index === this.currentPage + 2 ||
          item.index === this.currentPage + 3 ||
          item.index === this.currentPage + 4;
      } else if (this.currentPage == 2 && this.currentPage < this.getItems) {
        return item.index === this.currentPage - 1 ||
          item.index === this.currentPage ||
          item.index === this.currentPage + 1 ||
          item.index === this.currentPage + 2 ||
          item.index === this.currentPage + 3;
      } else if (this.currentPage == this.getItems - 1 && this.currentPage < this.getItems) {
        return item.index === this.currentPage - 3 ||
          item.index === this.currentPage - 2 ||
          item.index === this.currentPage - 1 ||
          item.index === this.currentPage ||
          item.index === this.currentPage + 1;
      } else if (this.currentPage > 1 && this.currentPage < this.getItems) {
        return item.index === this.currentPage - 2 ||
          item.index === this.currentPage - 1 ||
          item.index === this.currentPage ||
          item.index === this.currentPage + 1 ||
          item.index === this.currentPage + 2;
      } else {
        return item.index === this.currentPage - 4 ||
          item.index === this.currentPage - 3 ||
          item.index === this.currentPage - 2 ||
          item.index === this.currentPage - 1 ||
          item.index === this.currentPage;
      }
    });
  }

  public onChangeCurrentPage(value: number): void {
    this.dataStateChanged.emit({
      currentPage: value,
      pageSize: this.pageSize
    });
  }

  public onChangePageSize(value: number): void {
    this.currentPage = 1;

    this.dataStateChanged.emit({
      currentPage: this.currentPage,
      pageSize: value
    });
  }

  public trackByFn(index: number, item: any) {
    return item.id;
  }
}

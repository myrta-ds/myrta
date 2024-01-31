import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef, Injectable,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxGroupItem, CheckboxGroupValueWithId } from './models/checkbox-group.model';
import { cloneDeep } from 'lodash-es';
import { getSortedList } from './helpers/get-sorted-list';
import { filterSearchGroup } from './helpers/filter-search-group';
import { getItemById } from './helpers/get-item-by-id';
import { changeItemValue, changeListValue } from './helpers/change-item-value';
import { changeGroupValue } from './helpers/change-group-value';
import { getCheckedItems } from './helpers/get-checked-items';
import { v4 as uuid } from 'uuid';
import { Field } from '../../../services/mrx-autosave/mrx-autosave.service';

@Injectable({
  providedIn: CheckboxGroupComponent
})
@Component({
  selector: 'mrx-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true,
    },
  ],
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  private _isInit = false
  private _groupItemsWrapperHeight = 0
  private _searchValue = ''

  public list: CheckboxGroupItem[] = []
  public filteredList: CheckboxGroupItem[] = []
  public checkedList: CheckboxGroupItem[] = []

  // SAVE STATE
  public uuid: string = uuid()
  @Input() public fields: Field[] = [];

  @Input() public items: CheckboxGroupItem[] = []
  @Input() public scrollMaxHeight = 200
  @Input() public searchable = false
  @Input() public scrollable = false
  @Input() public sortable = false
  @Input() public enableMessage = 'Ничего не найдено'
  @Input() public searchPlaceholder = ''
  @Input() public customClasses = '';

  // TOOLTIP
  @Input() tooltip = ''

  // LABEL
  @Input() labelText = ''
  @Input() linkText = ''

  @ViewChild('groupItemsWrapper') groupItemsWrapper!: ElementRef;

  @Output() public changed: EventEmitter<CheckboxGroupItem[]> = new EventEmitter<CheckboxGroupItem[]>();
  @Output() public changeChecked: EventEmitter<CheckboxGroupItem[]> = new EventEmitter<CheckboxGroupItem[]>();
  @Output() public modelChange: EventEmitter<CheckboxGroupValueWithId> = new EventEmitter<CheckboxGroupValueWithId>();
  @Output() public modelCheckedChange: EventEmitter<CheckboxGroupValueWithId> = new EventEmitter<CheckboxGroupValueWithId>();
  @Output() public modelItemChange: EventEmitter<CheckboxGroupItem> = new EventEmitter<CheckboxGroupItem>();

  constructor() {}

  public get isSearchValue(): string {
    return this._searchValue
  }

  public get displaced(): boolean {
    return this.list.some((item: CheckboxGroupItem) => item.array.length)
  }

  public get getClasses(): string {
    return `${ this.customClasses }`;
  }

  public get getShowScroll(): boolean {
    return this._groupItemsWrapperHeight > this.scrollMaxHeight
  }

  public trackByFn(index: number, item: CheckboxGroupItem) {
    return item.id;
  }

  private onChange = (value: CheckboxGroupItem[]) => {};
  private onTouched = () => {};

  public writeValue(list: CheckboxGroupItem[]): void {
    if (list) {
      this.list = list
      this.filteredList = getSortedList(list, this.sortable)
      this.checkedList = getCheckedItems(list)

      this._isInit = true
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public updateValue(list: CheckboxGroupItem[], checkedList: CheckboxGroupItem[]): void {
    this.changed.emit(list);
    this.changeChecked.emit()
    this.modelChange.emit({value: list, id: this.uuid})
    this.modelCheckedChange.emit({value: checkedList, id: this.uuid})
    this.onChange(list);
    this.onTouched();
  }

  public checkHeightGroupWrapper(): void {
    this._groupItemsWrapperHeight = this.groupItemsWrapper.nativeElement.scrollHeight
  }

  public updateCheckboxGroupSearchValue(searchValue: string): void {
    this._searchValue = searchValue
    this.filteredList = filterSearchGroup(this.list, this._searchValue)
  }

  checkboxChanged({ value, item }: { value: boolean | null; item: CheckboxGroupItem }) {
    const cloneList: CheckboxGroupItem[] = cloneDeep(this.filteredList)
    const findItem: CheckboxGroupItem | null = getItemById(cloneList, item.id)
    let changedItem: CheckboxGroupItem | null = null

    if (findItem) {
      changedItem = changeItemValue(findItem, value)
      changeGroupValue(cloneList, item.parentId, value)
      getSortedList(cloneList, this.sortable)
    }

    this.filteredList = cloneList
    this.checkedList = getCheckedItems(cloneList)
    this.updateValue(this.filteredList, this.checkedList)

    if (changedItem) {
      this.modelItemChange.emit(changedItem)
    }
  }

  clearFilters() {
    const cloneList: CheckboxGroupItem[] = cloneDeep(this.filteredList)

    changeListValue(cloneList, false)
    getSortedList(cloneList, this.sortable)

    this.filteredList = cloneList
    this.checkedList = getCheckedItems(cloneList)
    this.updateValue(this.filteredList, this.checkedList)
  }
}

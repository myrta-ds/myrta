import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxGroupSearchValue } from '../../models/checkbox-group.model';
import { Field } from "../../../../../services/mrx-autosave/mrx-autosave.service";

@Component({
  selector: 'mrx-checkbox-group-header',
  templateUrl: './checkbox-group-header.component.html',
  styleUrls: ['./checkbox-group-header.component.less']
})
export class CheckboxGroupHeaderComponent {
  public searchValue = ''

  @Input() searchable = false
  @Input() searchPlaceholder = ''

  // LABEL
  @Input() tooltip = ''
  @Input() labelText = ''
  @Input() linkText = ''
  @Input() checkedItemsCount = 0

  @Output() public updateCheckboxGroupSearchValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() public clearFilters: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  public changeSearchValue(searchValue: CheckboxGroupSearchValue): void {
    this.updateCheckboxGroupSearchValue.emit(searchValue)
  }

  public onClearFilters(): void {
    this.clearFilters.emit()
  }
}

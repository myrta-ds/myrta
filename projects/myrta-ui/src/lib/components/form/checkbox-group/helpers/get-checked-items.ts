import { CheckboxGroupItem } from '../models/checkbox-group.model';

export const getCheckedItems = (list: CheckboxGroupItem[]) => {
  if (!list) return list

  const checkedItems: CheckboxGroupItem[] = []

  const getCheckedItemsFromArray = (list: CheckboxGroupItem[]) => {
    list.forEach((item: CheckboxGroupItem) => {
      if (item.type === 'array') {
        getCheckedItemsFromArray(item.array)
      } else {
        if (item.value) {
          checkedItems.push(item)
        }
      }
    })
  }

  getCheckedItemsFromArray(list)

  return checkedItems
}

import { CheckboxGroupItem } from '../models/checkbox-group.model';

export const getSortedList = (list: CheckboxGroupItem[], sortable: boolean) => {
  if (!list || !sortable) return list

  const sortedFunc = (prev: CheckboxGroupItem, next: CheckboxGroupItem) => {
    if (prev.value === null) {
      if (next.value === null) {
        return 0
      } else if (next.value) {
        return 1
      } else {
        return -1
      }
    } else if (prev.value) {
      if (next.value === null || !next.value) {
        return -1
      } else {
        return 0
      }
    } else {
      if (next.value === null || next.value) {
        return 1
      } else {
        if (prev.text < next.text) {return -1;}
        if (prev.text > next.text) {return 1;}
        return 0
      }
    }
  }

  const getSortedListInner = (list: CheckboxGroupItem[]) => {
    const sortedList = list.sort(sortedFunc)

    sortedList.forEach((item: CheckboxGroupItem) => {
      if (item.type === 'array') {
        getSortedListInner(item.array)
      }
    })

    return sortedList
  }

  return getSortedListInner(list)
}

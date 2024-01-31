import { CheckboxGroupItem, CheckboxIndeterminateState } from '../models/checkbox-group.model';

export const changeItemValue = (item: CheckboxGroupItem, value: CheckboxIndeterminateState) => {
  item.value = value
  if (item.type === 'array') {
    item.array.forEach((item: CheckboxGroupItem) => {
      changeItemValue(item, value)
    })
  }

  return item
}

export const changeListValue = (list: CheckboxGroupItem[], value: CheckboxIndeterminateState) => {
  list.forEach((item: CheckboxGroupItem) => {
    changeItemValue(item, value)
  })
}

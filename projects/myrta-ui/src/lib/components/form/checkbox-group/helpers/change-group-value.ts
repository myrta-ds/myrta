import { CheckboxGroupItem, CheckboxIndeterminateState } from '../models/checkbox-group.model';
import { getItemById } from './get-item-by-id';

export const checkUnderArrayValue = (array: CheckboxGroupItem[], value: CheckboxIndeterminateState): boolean => {
  return array.some((x: any) => {
    if (x.type === 'array') {
      return checkUnderArrayValue(x.array, value)
    }

    return x.value !== value
  })
}

export const changeGroupValue = (list: CheckboxGroupItem[], itemId: string | number, value: CheckboxIndeterminateState) => {
  if (!itemId) {
    return
  }

  const parent = getItemById(list, itemId)

  if (parent) {
    parent.value = checkUnderArrayValue(parent.array, value) ? null : value

    changeGroupValue(list, parent.parentId, value)
  }
}

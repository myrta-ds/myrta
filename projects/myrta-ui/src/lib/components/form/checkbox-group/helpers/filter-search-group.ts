import { CheckboxGroupItem, CheckboxGroupSearchValue } from '../models/checkbox-group.model';

export const filterSearchGroup = (list: CheckboxGroupItem[], searchValue: CheckboxGroupSearchValue) => {
  if (!list) return list

  const getIntersectionsFromString = (array: CheckboxGroupItem[]) => {
    const searchArray: CheckboxGroupItem[] = []

    array.forEach((item: CheckboxGroupItem) => {
      if (item.text.toLowerCase().includes(searchValue.toLowerCase())) {
        if (item.type === 'array') {
          const newArray: CheckboxGroupItem[] = getIntersectionsFromString(item.array)
          searchArray.push({...item, array: newArray})
        } else {
          searchArray.push(item)
        }
      } else {
        if (item.type === 'array') {
          const newArray: CheckboxGroupItem[] = getIntersectionsFromString(item.array)
          newArray.length && searchArray.push({...item, array: newArray})
        }
      }
    })

    return searchArray
  }

  return getIntersectionsFromString(list)
}

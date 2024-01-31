import { CheckboxGroupItem } from '../models/checkbox-group.model';

export const getItemById = (list: CheckboxGroupItem[], itemId: string | number) => {
  const findById = (acc: CheckboxGroupItem | null, el: CheckboxGroupItem | null): CheckboxGroupItem | null => {
    if ( el?.id === itemId ) return el;
    if ( el?.array ) return el.array.reduce(findById, acc);
    return acc;
  }

  return list.reduce(findById, null);
}

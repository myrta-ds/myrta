export interface CheckboxGroupItem {
  id: string | number,
  text: string,
  parentId: string | number,
  value: boolean | null,
  type: 'single' | 'array',
  array: CheckboxGroupItem[],
}

export type CheckboxIndeterminateState = boolean | null

export type CheckboxGroupSearchValue = string

export type AnimateCheckboxGroupState = 'open' | 'close' | 'sustain'

export interface CheckboxGroupValueWithId {
  value: CheckboxGroupItem[],
  id: string
}

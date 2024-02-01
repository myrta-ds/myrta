export enum InputTextareaSizesEnum {
  'small' = 'mrx-input-sm',
  'medium' = 'mrx-input-md',
  'large' = 'mrx-input-lg',
}

export type InputTextareaSizesTypes = 'small' | 'medium' | 'large';

export type InputTextareaValueTypes = string;

export interface InputTextareaValueWithId {
  value: InputTextareaValueTypes,
  id: string
}

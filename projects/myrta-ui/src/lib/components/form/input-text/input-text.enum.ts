export enum InputTextSizesEnum {
  'small' = 'mrx-input-text-sm',
  'medium' = 'mrx-input-text-md',
  'large' = 'mrx-input-text-lg',
}

export type InputTextSizesTypes = 'small' | 'medium' | 'large';

export type InputTextValueTypes = string;

export interface InputTextValueWithId {
  value: InputTextValueTypes,
  id: string
}

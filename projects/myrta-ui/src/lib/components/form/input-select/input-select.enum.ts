export enum InputSelectSizeEnum {
  'medium' = 'mrx-input-select-md',
  'large' = 'mrx-input-select-lg'
}

export type InputSelectSizeTypes = 'medium' | 'large';

export type InputSelectValueTypes = string | string[];

export interface InputSelectValueWithId {
  value: InputSelectValueTypes,
  id: string
}

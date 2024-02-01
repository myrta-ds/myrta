export type InputNumberType = 'int' | 'float' | 'percent';

export enum InputNumberSizesEnum {
  'small' = 'mrx-input-number-sm',
  'medium' = 'mrx-input-number-md',
  'large' = 'mrx-input-number-lg',
}

export type InputNumberSizesTypes = 'small' | 'medium' | 'large';

export type InputNumberValueTypes = number;

export interface InputNumberValueWithId {
  value: InputNumberValueTypes,
  id: string
}

export enum InputDateSizesEnum {
  'small' = 'mrx-input-date-sm',
  'medium' = 'mrx-input-date-md',
  'large' = 'mrx-input-date-lg',
}

export type InputDateSizesTypes = 'small' | 'medium' | 'large';

export type InputDateTimeValueTypes = string;

export interface InputDateTimeValueWithId {
  value: InputDateTimeValueTypes,
  id: string
}

export type InputDateTimeValidation = 'default' | 'double'

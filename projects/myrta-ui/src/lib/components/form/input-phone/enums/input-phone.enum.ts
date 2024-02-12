export enum InputPhoneSizesEnum {
  'small' = 'mrx-input-phone-sm',
  'medium' = 'mrx-input-phone-md',
  'large' = 'mrx-input-phone-lg',
}

export type InputPhoneSizesTypes = 'small' | 'medium' | 'large';

export type InputPhoneValueTypes = string | undefined;

export interface InputPhoneValueWithId {
  value: any,
  id: string
}

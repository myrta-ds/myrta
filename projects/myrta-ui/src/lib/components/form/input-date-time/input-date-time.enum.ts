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

/**
 * Пример использования <br/>
 * message="Не более {diff} дней" <br/>
 * @param hour = 0 - 23
 * @param minute = 0 - 59
 */
export interface ExtraTime {
  hour: string
  minute: string
}

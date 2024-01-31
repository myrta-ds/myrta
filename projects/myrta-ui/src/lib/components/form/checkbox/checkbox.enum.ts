import { ElementRef } from '@angular/core';

export enum CheckboxTypesEnum {
  'default' = 'mrx-checkbox-default',
}

export type CheckboxTypes = 'default'

export interface CheckboxOutput {
  checked: boolean
  element: ElementRef
}

export type CheckboxValueTypes = boolean;

export interface CheckboxValueWithId {
  value: CheckboxValueTypes,
  id: string
}


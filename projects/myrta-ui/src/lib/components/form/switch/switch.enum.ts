export enum SwitchTypeEnum {
  'default' = 'mrx-switch-default',
  'toggle' = 'mrx-switch-toggle',
}

export type SwitchTypeTypes = 'default' | 'toggle';

export enum SwitchSizeEnum {
  'large' = 'mrx-switch-lg',
  'small' = 'mrx-switch-sm',
}

export type SwitchSizeTypes = 'large' | 'small';

export type SwitchValueTypes = boolean;

export interface SwitchValueWithId {
  value: SwitchValueTypes,
  id: string
}

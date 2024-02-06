export enum BadgeTypeEnum {
  'default' = 'mrx-type-default',
  'circle' = 'mrx-type-circle'
}
export type BadgeType = 'default' | 'circle'

export enum BadgeSizeEnum {
  'default' = 'mrx-size-default',
  'small' = 'mrx-size-small'
}
export type BadgeSizeType = 'small' | 'default'

export enum BadgeTagTypeClassesEnum {
  'tag' = 'mrx-badge-tag',
  'link' = 'mrx-badge-link',
  'button' = 'mrx-badge-button'
}
export type BadgeTagType = 'tag' | 'link' | 'button'

export enum BadgeColorClassesEnum {
  'positive' = 'mrx-badge-color-positive',
  'negative' = 'mrx-badge-color-negative',
  'attention' = 'mrx-badge-color-attention',
  'neutral' = 'mrx-badge-color-neutral',
  'brand' = 'mrx-badge-color-brand',
}

export type BadgeColorType = 'positive' | 'negative' | 'attention' | 'neutral' | 'brand'

export interface BadgeI {
  type?: BadgeType,
  tag?: BadgeTagType,
  color?: BadgeColorType,
  path?: string,
  text: string
}

export enum BadgeTargetTypesEnum {
  '_self' = '_self',
  '_blank' = '_blank',
  '_parent' = '_parent',
  '_top' = '_top',
}

export type BadgeTargetTypes = '_self' | '_blank' | '_parent' | '_top'

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
  'positive' = 'color-positive',
  'negative' = 'color-negative',
  'attention' = 'color-attention',
  'neutral' = 'color-neutral',
  'brand' = 'color-brand',
}

export type BadgeColorType = 'positive' | 'negative' | 'attention' | 'neutral' | 'brand'

export interface BadgeI {
  type?: BadgeType,
  tag?: BadgeTagType,
  color?: BadgeColorType,
  path?: string,
  text: string
}

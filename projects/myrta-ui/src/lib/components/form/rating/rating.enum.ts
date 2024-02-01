export enum RatingSizesEnum {
  'small' = 'mrx-rating-sm',
  'large' = 'mrx-rating-lg',
}

export enum RatingWrapperSizesEnum {
  'small' = 'mrx-rating-wrapper-sm',
  'large' = 'mrx-rating-wrapper-lg',
}

export type RatingSizesTypes = 'small' | 'large'

export enum RatingValueSizesEnum {
  'small' = 'mrx-rating-value-sm',
  'large' = 'mrx-rating-value-lg',
}

export type RatingValueSizesTypes = 'small' | 'large'

export type RatingValueType = number;

export interface RatingElement {
  value: number,
  filled: boolean,
  double: boolean
}

export type RatingViewMode = 'none' | 'text' | 'value' | 'text-with-value'

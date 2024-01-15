export enum BreadcrumbsTypeEnum {
  'default' = 'mrx-breadcrumbs-default',
  'link' = 'mrx-breadcrumbs-link'
}
export type BreadcrumbsType = 'default' | 'link'

export interface BreadcrumbsItemI {
  text: string,
  path?: string,
  isLink?: boolean,
  isShowArrow?: boolean
}

export declare type PaginatorPosition = 'centered' | 'right' | 'left';

export const PaginatorPositionCss:
  Record<PaginatorPosition, string> = {
  ['centered']: 'paginator-centered',
  ['right']: 'paginator-right',
  ['left']: 'paginator-left'
};

export interface PaginatorItem {
  index: number,
  active: boolean
}

export interface PaginateOutputObject {
  currentPage: number,
  pageSize: number
}

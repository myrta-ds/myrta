export enum TableTypeEnum {
  'default' = 'type-default',
  'light' = 'type-light',
  'cards' = 'type-cards',
  'mixed' = 'type-mixed'
}

export type TableType = 'default' | 'light' | 'cards' | 'mixed';
export type SortDirection = 'asc' | 'desc';

export interface TableBodyItem {
  [key: string]: any;
}

export interface SortDescriptor {
  col: string,
  dir?: SortDirection;
}

// default = слева количество, справа сортировка
// second = слева сортировка, справа скачать
export type TableCardHeaderType = 'default' | 'second'

export interface HeaderSettings {
  type: TableCardHeaderType,
  sort?: boolean,
  count?: boolean,
  download?: boolean,
  background?: boolean,
  substrate?: boolean,
  toggle?: boolean,
  countText?: string
}

export interface ContentSettings {
  substrate?: boolean
}

export interface PaginatorSettings {
  substrate?: boolean
}

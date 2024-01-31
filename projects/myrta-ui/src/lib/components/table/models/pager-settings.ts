import { PaginatorPosition } from '../../paginator/paginator.enum';

export declare type PagerType = 'numeric' | 'input';

export interface PagerSettings {
  /**
   * Toggles the information about the current page and the total number of records.
   *
   * @default true
   */
  info?: boolean;
  /**
   * Defines the type of the Grid pager., todo
   *
   * @default 'numeric'
   */
  type?: PagerType;
  /**
   * Shows a menu for selecting the page size.
   */
  pageSizes: Array<number>;

  position?: PaginatorPosition;

  withPageSize?: boolean;
}

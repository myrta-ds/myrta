import { SortDescriptor } from '../table.enum';

export interface DataStateChangeEvent {
  /**
   * The number of records to skip.
   */
  page: number;
  /**
   * The number of records to take.
   */
  pageSize: number;
  /**
   * The sort descriptors by which the data is sorted.
   */
  sort?: SortDescriptor;
}

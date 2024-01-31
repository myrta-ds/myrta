import { PagerSettings } from '../models/pager-settings';

export const DefaultPagerSettings: PagerSettings = {
  info: true,
  pageSizes: [20, 50, 100],
  type: 'numeric',
  withPageSize: true
};

import { Timezone, TimezoneType } from '../enum/timezone';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export const formattingToMoscowTimezone = (date: any, tz: TimezoneType): string => {
  dayjs.extend(utc)
  dayjs.extend(timezone)

  return dayjs.utc(date).utcOffset(Timezone[tz], tz !== 'default').toISOString()
}

import { Timezone, TimezoneType } from '../pipes/date/enums/timezone';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import tz from 'dayjs/plugin/timezone';

export const formattingIsoToString = (
  value: string | Date,
  timezone: TimezoneType = 'default',
  time: boolean = true,
  format?: string
) => {
  dayjs.extend(utc)
  dayjs.extend(tz)

  const defaultFormat = time ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY'

  return timezone === 'default' ?
    dayjs(value.toString()).format(format || defaultFormat) :
    dayjs.utc(value.toString()).utcOffset(Timezone[timezone]).format(format || defaultFormat)
}

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import tz from 'dayjs/plugin/timezone';
import { Timezone, TimezoneType } from '../enums/timezone';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru'

dayjs.extend(utc)
dayjs.extend(tz)
registerLocaleData(localeRu)

export const changeTimezone = (value: string, timezone: TimezoneType) => {
  const date = timezone === 'default' ? dayjs(value) : dayjs.utc(value).utcOffset(Timezone[timezone])

  const day = date.date()
  const month = date.month() + 1
  const year = date.year()
  const hour = date.hour()
  const minute = date.minute()
  const formattedDay = String(day).length === 2 ? String(day) : String('0' + day)
  const formattedMonth = String(month).length === 2 ? String(month) : String('0' + month)
  const formattedHour = String(hour).length === 2 ? String(hour) : String('0' + hour)
  const formattedMinute = String(minute).length === 2 ? String(minute) : String('0' + minute)
  return dayjs(`${String(year)}-${String(formattedMonth)}-${String(formattedDay)} ${formattedHour}:${formattedMinute}`).toISOString()
}

import { DateModel, TimeModel } from './validate-value-models';
import { Timezone, TimezoneType } from '../enum/timezone';
import dayjs from 'dayjs';
import tz from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

export const dateModelValueParse = (value: string, timezone: TimezoneType): DateModel => {
  dayjs.extend(utc)
  dayjs.extend(tz)

  const date = timezone === 'default' ? dayjs(value) : dayjs.utc(value).utcOffset(Timezone[timezone])
  const day = date.date()
  const month = date.month() + 1
  const year = date.year()
  const formattedDay = String(day).length === 2 ? String(day) : String('0' + day)
  const formattedMonth = String(month).length === 2 ? String(month) : String('0' + month)
  const dateString = `${String(year)}.${String(formattedMonth)}.${String(formattedDay)}`

  return {
    view: dayjs(dateString).format('DD.MM.YYYY'),
    day: formattedDay,
    month: formattedMonth,
    year: String(year),
    invalid: !(dayjs(dateString).isValid() && dateString.length === 10)
  }
}

export const timeModelValueParse = (value: string, timezone: TimezoneType): TimeModel => {
  dayjs.extend(utc)
  dayjs.extend(tz)

  const date = timezone === 'default' ? dayjs(value) : dayjs.utc(value).utcOffset(Timezone[timezone])

  const hour = date.hour()
  const minute = date.minute()
  const formattedHour = String(hour).length === 2 ? String(hour) : String('0' + hour)
  const formattedMinute = String(minute).length === 2 ? String(minute) : String('0' + minute)
  const timeString = `${formattedHour}:${formattedMinute}`

  return {
    view: timeString,
    hour: formattedHour,
    minute: formattedMinute,
    invalid: timeString.length !== 5
  }
}

import { TimeModel } from './validate-value-models';
import dayjs from 'dayjs';

export const timeModelValueParse = (value: string, format: string): TimeModel => {
  const date = dayjs(value, format)

  const hour = date.hour()
  const minute = date.minute()
  const second = '00'
  const formattedHour = String(hour).length === 2 ? String(hour) : String('0' + hour)
  const formattedMinute = String(minute).length === 2 ? String(minute) : String('0' + minute)
  const timeString = `${formattedHour}:${formattedMinute}`

  return {
    view: timeString,
    hour: formattedHour,
    minute: formattedMinute,
    second: second,
    invalid: timeString.length !== 5
  }
}

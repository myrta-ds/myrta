import { DateModel, TimeModel } from './validate-value-models';
import dayjs from 'dayjs';

export const dateModelValueParse = (value: string, format: string): DateModel => {
  const date = dayjs(value, format)

  const day = date.date()
  const month = date.month() + 1
  const year = date.year()
  const formattedDay = String(day).length === 2 ? String(day) : String('0' + day)
  const formattedMonth = String(month).length === 2 ? String(month) : String('0' + month)
  const formattedYear = validateDateYear(year)
  const dateString = `${String(formattedYear)}.${String(formattedMonth)}.${String(formattedDay)}`

  return {
    view: dayjs(dateString).format('DD.MM.YYYY'),
    day: formattedDay,
    month: formattedMonth,
    year: formattedYear,
    invalid: !(dayjs(dateString).isValid() && dateString.length === 10)
  }
}

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

const validateDateYear = (date: number): string => {
  switch (String(date).length) {
    case 3:
      return '0' + date
    case 2:
      return '00' + date
    case 1:
      return '000' + date
    default:
      return String(date)
  }
}

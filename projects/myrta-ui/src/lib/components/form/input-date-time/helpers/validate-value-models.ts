import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)

export const validateDateModel = (value: string): DateModel => {
  const splitDateAndTime = value.split(' ')
  const dateArray = splitDateAndTime[0].split('.')
  const day = validateDay(dateArray[0]) || ''
  const month = validateMonth(dateArray[1]) || ''
  const year = dateArray[2] || ''

  return {
    view: `${day}${month ? '.' + month : ''}${year ? '.' + year : value[5] ? '.' + '' : ''}`,
    day: day,
    month: month,
    year: year,
    invalid: !(dayjs(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`, 'YYYY-MM-DD').isValid() && splitDateAndTime[0].length === 10)
  }
}

export const validateTimeModel = (value: string): TimeModel => {
  const splitDateAndTime = value.split(' ')
  const timeArray = splitDateAndTime[1] ? splitDateAndTime[1].split(':') : ''
  const hour = validateHours(timeArray[0]) || ''
  const minutes = validateMinutes(timeArray[1]) || ''

  return {
    view: `${hour}${minutes ? ':' + minutes : ''}`,
    hour: hour,
    minute: minutes,
    invalid: !!splitDateAndTime[1] ? splitDateAndTime[1].length !== 5 : true
  }
}

export const validateDay = (value: string): string => {
  if (Number(value) > 31) {
    return '31'
  }
  if (value === '00') {
    return '01'
  }
  return value
}

export const validateMonth = (value: string): string => {
  if (Number(value) > 12) {
    return '12'
  }
  if (value === '00') {
    return '01'
  }
  return value
}


export const validateHours = (value: string): string => {
  if (Number(value) > 23) {
    return '23'
  }
  return value
}

export const validateMinutes = (value: string): string => {
  if (Number(value) > 59) {
    return '59'
  }
  return value
}

export type DateModel = {
  view: string,
  day: string,
  month: string,
  year: string,
  invalid: boolean
}

export type TimeModel = {
  view: string,
  hour: string,
  minute: string,
  invalid: boolean
}

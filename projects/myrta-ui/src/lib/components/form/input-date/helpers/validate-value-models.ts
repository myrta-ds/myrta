import dayjs from 'dayjs';

export const validateDateModel = (value: string): DateModel => {
  const dateArray = value.split('.')
  const day = validateDay(dateArray[0]) || ''
  const month = validateMonth(dateArray[1]) || ''
  const year = dateArray[2] || ''

  return {
    view: `${day}${month ? '.' + month : ''}${year ? '.' + year : value[5] ? '.' + '' : ''}`,
    day: day,
    month: month,
    year: year,
    invalid: !(dayjs(`${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`).isValid() && value.length === 10)
  }
}

export const validateTimeModel = (value: string): TimeModel => {
  const timeArray = value.split(':')
  const hour = validateHours(timeArray[0]) || ''
  const minutes = validateMinutes(timeArray[1]) || ''

  return {
    view: `${hour}${minutes ? ':' + minutes : ''}`,
    hour: hour,
    minute: minutes,
    invalid: value.length !== 5
  }
}

export const validateDay = (value: string): string => {
  if (Number(value) > 31) {
    return '31'
  }
  return value
}

export const validateMonth = (value: string): string => {
  if (Number(value) > 12) {
    return '12'
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

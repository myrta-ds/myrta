import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat)

export const validateTimeModel = (value: string): TimeModel => {
  const timeArray = value.split(':')
  const hour = validateHours(timeArray[0]) || ''
  const minutes = validateMinutes(timeArray[1]) || ''
  const seconds = '00'

  return {
    view: `${hour}${minutes ? ':' + minutes : ''}`,
    hour: hour,
    minute: minutes,
    second: seconds,
    invalid: value ? value.length !== 5 : true
  }
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

export type TimeModel = {
  view: string,
  hour: string,
  minute: string,
  second: string,
  invalid: boolean
}

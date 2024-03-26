import dayjs from 'dayjs';

export const cleanDate = (value: string): string => {
  return dayjs(value).second(0).millisecond(0).toISOString()
}

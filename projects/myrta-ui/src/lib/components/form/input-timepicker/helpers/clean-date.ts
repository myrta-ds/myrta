import dayjs from 'dayjs';

export const cleanDate = (value: string, format: string): string => {
  return dayjs(value).format(format)
}

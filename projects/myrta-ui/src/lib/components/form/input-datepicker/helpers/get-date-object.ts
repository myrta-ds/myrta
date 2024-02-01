import dayjs from 'dayjs';
import { DateModel, TimeModel } from './validate-value-models';

export const getDateObject = (dateModel: DateModel, timeModel: TimeModel, timepicker: boolean): Date => {
  if (timepicker) {
    return dayjs(`${dateModel.year}-${dateModel.month}-${dateModel.day} ${timeModel.hour}:${timeModel.minute}`, 'YYYY-MM-DD HH:mm').toDate()
  } else {
    return dayjs(`${dateModel.year}-${dateModel.month}-${dateModel.day}`, 'YYYY-MM-DD').toDate()
  }
}

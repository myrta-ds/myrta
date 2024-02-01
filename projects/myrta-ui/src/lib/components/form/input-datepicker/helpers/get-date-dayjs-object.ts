import { DateModel, TimeModel } from './validate-value-models';
import dayjs, { Dayjs } from 'dayjs';

export const getDateDayjsObject = (dateModel: DateModel, timeModel: TimeModel, timepicker: boolean): Dayjs => {
  if (timepicker) {
    return dayjs(`${dateModel.year}-${dateModel.month}-${dateModel.day} ${timeModel.hour}:${timeModel.minute}`, 'YYYY-MM-DD HH:mm')
  } else {
    return dayjs(`${dateModel.year}-${dateModel.month}-${dateModel.day}`, 'YYYY-MM-DD')
  }
}

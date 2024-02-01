import dayjs from 'dayjs';
import { TimeModel } from './validate-value-models';

export const getDateObject = (timeModel: TimeModel): Date => {
  return dayjs(`${timeModel.hour}:${timeModel.minute}`, 'HH:mm').toDate()
}

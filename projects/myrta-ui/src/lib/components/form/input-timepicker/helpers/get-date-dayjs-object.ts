import { TimeModel } from './validate-value-models';
import dayjs, { Dayjs } from 'dayjs';

export const getDateDayjsObject = (timeModel: TimeModel): Dayjs => {
  return dayjs(`${timeModel.hour}:${timeModel.minute}`, 'HH:mm')
}

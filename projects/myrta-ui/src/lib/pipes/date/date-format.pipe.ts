import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TimezoneType } from './enums/timezone';
import { changeTimezone } from './helpers/change-timezone';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any, timezone: TimezoneType = 'default', format: string = 'dd.MM.yyyy', args?: any): any {
    if (timezone) {
      return super.transform(changeTimezone(value, timezone), format)
    }

    return super.transform(value, format);
  }
}

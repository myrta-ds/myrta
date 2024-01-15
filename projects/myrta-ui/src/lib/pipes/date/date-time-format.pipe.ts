import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { changeTimezone } from './helpers/change-timezone';
import { TimezoneType } from './enums/timezone';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {
  override transform(value: any, timezone: TimezoneType = 'default', format: string = 'dd.MM.yyyy HH:mm', args?: any): any {
    if (timezone && value !== '') {
      return super.transform(changeTimezone(value, timezone), format)
    }

    return super.transform(value, format);
  }
}

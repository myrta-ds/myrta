import { Pipe, PipeTransform } from '@angular/core';
import { CountryCode, parsePhoneNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(phoneValue: number | string, locale: CountryCode = 'RU'): string {
    if (phoneValue) {
      const phoneNumber = parsePhoneNumber(String(phoneValue), locale);
      return phoneNumber.formatNational();
    } else {
      return ''
    }
  }
}

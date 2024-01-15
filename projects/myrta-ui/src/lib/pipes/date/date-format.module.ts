import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from './date-format.pipe';
import { DateTimeFormatPipe } from './date-time-format.pipe';

@NgModule({
  declarations: [DateFormatPipe, DateTimeFormatPipe],
  imports: [CommonModule],
  exports: [DateFormatPipe, DateTimeFormatPipe]
})
export class DateFormatModule { }

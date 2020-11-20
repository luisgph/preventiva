import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe, getLocaleDateFormat, FormatWidth, formatDate } from '@angular/common';

@Pipe({
  name: 'formato'
})
export class FormatoPipe implements PipeTransform {
  transform(value: string, arg?): string {
    switch (arg) {
      case 'isProtected':
        if (value) {
          value = 'Si';
        } else {
          value = 'No';
        }
        break;
      case 'departureDate':
      case 'arriveDate':
        value = formatDate(value, 'dd/MM/yyyy, h:mm a', 'en-US');
        break;
      case 0:
        value = 'true';
        break;
      case 1:
      case 2:
        value = 'false';
        break;
    }
    return value;
  }
}

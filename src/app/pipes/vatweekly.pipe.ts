import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatweekly'
})
export class VatweeklyPipe implements PipeTransform {

  transform(value: number,rate: number): number {
    return value*7 +(value*rate)/100;
  }

}

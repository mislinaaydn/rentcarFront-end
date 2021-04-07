import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatmonthly'
})
export class VatmonthlyPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value*30 +(value*rate)/100;
  }

}

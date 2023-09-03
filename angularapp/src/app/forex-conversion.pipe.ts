import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'forexConverter'
})
export class ForexConverterPipe implements PipeTransform {

  transform(amount: string, fromCurrency: string, toCurrency: string): string {
    const fromRate = Number(fromCurrency);
    const toRate = Number(toCurrency);
    const x=Math.round((Number(amount)/fromRate)*toRate);
    return x.toFixed(2);
  }
}

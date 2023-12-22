import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prime'
})
export class PrimePipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): any {

    const isPrime = (n: number) => {
      for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    }

    return value.filter(n => isPrime(n))
    
  }

}

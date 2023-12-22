import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toStringPipe'
})
export class ToStringPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

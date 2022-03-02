import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ref'
})
export class RefLibroPipe implements PipeTransform {

  transform(value: string): string {
    let result: string;
    result = "Ref-"+value;
    return result;
  }

}

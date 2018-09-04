import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    if(value === null || value.length === 0) {
      return value;
    }

    return value.sort((a, b) => {
      if(a.name < b.name) {
        return -1;
      }
      if(a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

}

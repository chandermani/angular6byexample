import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let field: string = args[0], searchTerm = args[1];
    if (!field) return [];
    if (searchTerm == null) return [...value];
    return value.filter((item) => item[field] === searchTerm);
  }
}

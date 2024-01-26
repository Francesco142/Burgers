import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'menuFilter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any> | null, filter?: { [key: string]: any }): Array<any> {
        if (Object.keys(filter!).length == 0) return items!;

        let filterKeys = Object.keys(filter!);



        return items!.filter(item => {
            return filterKeys.every(keyName => {
                return (
                    new RegExp(filter![keyName], 'gi').test(item[keyName]) ||
                    filter![keyName] === ''
                );
            });
        });
    }
}
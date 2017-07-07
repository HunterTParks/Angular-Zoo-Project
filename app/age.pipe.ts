import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredSorting){
    var output: Animal[] = [];
    var temp = null;
    var cou = 0;
    console.log("TESTING BEGINING OF STUFF input length is" + input.length);

    if(desiredSorting === "youngest-to-oldest"){

    }
  

    return input;
  }
}

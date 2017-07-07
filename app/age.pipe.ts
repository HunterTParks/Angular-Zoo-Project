import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], desiredSorting){
    var output: Animal[] = [];

    if(desiredSorting === "Oldest"){
      for(var i = 0; i <= input.length - 1; i++){
        console.log(i);
        if(input[i].age >= 2){
          output.push(input[i]);
        }
      }
    }
    else if(desiredSorting === "Youngest"){
      for(var i = 0; i <= input.length - 1; i++){
        console.log(i);
        if(input[i].age < 2){
          output.push(input[i]);
        }
      }
    }
    else {
      return input;
    }
    return output;
  }
}

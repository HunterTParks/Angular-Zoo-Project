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
      for(var i = 0; i <= input.length; i++)
      {
        console.log("TESTING");
        if(input[i + 1] === undefined){

        }
        while(true){
          console.log(input[i].name);
          if(input[i + 1] === undefined){
            break;
          }

          if(input[i].age > input[i + 1].age){
            temp = input[i];
            input[i] = input[i + 1];
            input[i + 1] = temp;
          }
          else {
            break;
          }
        }
      }
    }
    else if(desiredSorting === "oldest-to-youngest"){

    }
    else {

    }

    return input;
  }
}

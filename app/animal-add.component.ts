import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from "./animal.model";

@Component({
  selector: 'animal-add',
  template: `
  <div class = "panel panel-success formStyling">
    <form *ngIf="animalForm">
      <h3>Add Animal</h3>
      <label for="name">Add Name:</label>
      <input #animalName required>
      <br>
      <label for="species">Add Species:</label>
      <input #animalSpecies required>
      <br>
      <label for="age">Add Age:</label>
      <input #animalAge required>
      <br>
      <label for="diet">Add Diet:</label>
      <input #animalDiet required>
      <br>
      <label for="location">Edit location:</label>
      <input #animallocation required>
      <br>
      <label for="caretakers">Edit caretakers:</label>
      <input #animalcaretakers required>
      <br>
      <label for="sex">Edit Sex:</label>
      <input #animalSex required>
      <br>
      <label for="likes">Edit Likes:</label>
      <input #animalLikes required>
      <br>
      <label for="dislikes">Edit Dislikes:</label>
      <input #animalDislikes required>
      <br>
      <button (click)="submitForm(animalName.value, animalSpecies.value, animalAge.value, animalDiet.value, animallocation.value, animalcaretakers.value, animalSex.value, animalLikes.value, animalDislikes.value)">Done!</button>
    </form>
  </div>
  `
})

export class AddAnimalComponent {
  @Input() animalForm: Animal;
  @Output() clickDoneAdding = new EventEmitter();

  submitForm(animalName, animalSpecies, animalAge, animalDiet, animallocation, animalcaretakers, animalSex, andimalLikes, animalDislikes){
    console.log(animalName);
    var newAnimal: Animal = new Animal(animalName, animalSpecies, animalAge, animalDiet, animallocation, animalcaretakers, animalSex, andimalLikes, animalDislikes);
    this.clickDoneAdding.emit(newAnimal);
  }
}

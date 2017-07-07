import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from "./animal.model";

@Component({
  selector: 'animal-add',
  template: `
  <form #animalForm>
    <h3>Edit Animal</h3>
    <label for="name">Add Name:</label>
    <input #animalName required>
    <label for="species">Add Species:</label>
    <input #animalSpecies required>
    <label for="age">Add Age:</label>
    <input #animalAge required>
    <label for="diet">Add Diet:</label>
    <input #animalDiet required>
    <label for="location">Edit location:</label>
    <input #animallocation required>
    <label for="caretakers">Edit caretakers:</label>
    <input #animalcaretakers required>
    <label for="sex">Edit Sex:</label>
    <input #animalSex required>
    <label for="likes">Edit Likes:</label>
    <input #animalLikes required>
    <label for="dislikes">Edit Dislikes:</label>
    <input #animalDislikes required>
    <button (click)="submitForm(animalName.value, animalSpecies.value, animalAge.value, animalDiet.value, animallocation.value, animalcaretakers.value, animalSex.value, animalLikes.value, animalDislikes.value)">Done!</button>
  </form>
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

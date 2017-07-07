import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <ul>
    <div class = "col-md-6">
      <h2>List of registered animals</h2>
    </div>
    <div class = "col-md-6">
      <p>Change Sorting?</p>
    </div>
    <select (change)="onChange($event.target.value)">
      <option value = "normal">Normal</option>
      <option value = "Youngest">Youngest</option>
      <option value = "Oldest">Oldest</option>
    </select>
    <br><br><br>
    <ul *ngFor="let currentAnimal of childAnimals | age:filterByAge"><div class = "panel panel-default"><li><h2>Name: {{currentAnimal.name}}</h2></li><li>Species: {{currentAnimal.species}}</li><li>Age: {{currentAnimal.age}}</li><li>Diet: {{currentAnimal.diet}}</li><li> Location: {{currentAnimal.location}}</li><li>Amount of Caretakers: {{currentAnimal.caretakers}}</li><li>Sex: {{currentAnimal.sex}}</li><li>They Like: {{currentAnimal.likes}}</li><li id = "dislikes">They Dislike: {{currentAnimal.dislikes}}<br><button (click)="editButton(currentAnimal)">Edit Animal</button></div></ul><br>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "normal";

  editButton(animalToEdit){
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }
}

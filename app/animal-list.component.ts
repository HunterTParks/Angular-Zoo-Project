import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <ul>
    <select (change)="onChange($event.target.value)">
      <option value = "normal">Normal</option>
      <option value = "Youngest">Youngest</option>
      <option value = "Oldest">Oldest</option>
    </select>
    <ul *ngFor="let currentAnimal of childAnimals | age:filterByAge"><div class = "panel panel-default"><li>Name: {{currentAnimal.name}}</li><li>Species: {{currentAnimal.species}}</li><li>Age: {{currentAnimal.age}}</li><br><button (click)="editButton(currentAnimal)">Edit Animal</button></div></ul><br>
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

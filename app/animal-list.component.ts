import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <ul>
    <ul *ngFor="let currentAnimal of childAnimals"><div class = "panel panel-default"><li>Name: {{currentAnimal.name}}</li><li>Species: {{currentAnimal.species}}</li><li>Age: {{currentAnimal.age}}</li><br><button (click)="editButton(currentAnimal)">Edit Animal</button></div></ul><br>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
  @Output() clickSender = new EventEmitter();

  editButton(animalToEdit){
    this.clickSender.emit(animalToEdit);
  }
}

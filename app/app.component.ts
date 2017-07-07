import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h2>Zoooooo</h2>
    </div>
    <div class = "well">
      <animal-list [childAnimals] = "listOfAnimals" (clickSender)="editAnimal($event)"></animal-list>
    </div>
    <div class = "panel panel-default">
      <animal-edit [childSelectedAnimal] = "selectedAnimal" (clickDoneEditing)="finishedEditing()"></animal-edit>
    </div>
    <div class = "panel panel-default">
      <button (click)="showForm($event)">Add Animal</button>
    </div>
    <animal-add [animalForm] = "AddAnimalForm" (clickDoneAdding)="addAnimal($event)"></animal-add>
  </div>
  `
})

export class AppComponent {
  listOfAnimals: Animal[] = [
    new Animal('Tiger', 'Leo', '2', 'carnivore', 'West bay', '5', 'male', 'food, humans, elk', 'other tigers'),
    new Animal('otter', 'Pants', '1', 'herbivore', 'Water Exhibit', '2', 'male', 'playing, toys, water', 'not playing, no toys, no water'),
    new Animal('Zebra', 'Stiped Sweater', '3', 'herbivore', 'Parking lot', '3', 'male', 'escaping', 'Leo'),
    new Animal('Zebra', 'Mark', '6', 'herbivore', 'Parking lot', '3', 'male', 'escaping', 'Leo'),
    new Animal('Zebra', 'Frank', '4', 'herbivore', 'Parking lot', '3', 'male', 'escaping', 'Leo'),
    new Animal('Zebra', 'Lewis', '144', 'herbivore', 'Parking lot', '3', 'male', 'escaping', 'Leo')
   ];

  selectedAnimal = null;
  AddAnimalForm = null;

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimal){
    this.listOfAnimals.push(newAnimal);
    this.AddAnimalForm = null;
  }

  showForm(clickedEvent){
    this.AddAnimalForm = clickedEvent;
  }
}

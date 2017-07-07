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
      <button (click)="showForm($event)">Add Animal</button>
      <animal-add [animalForm] = "AddAnimalForm" (clickDoneAdding)="addAnimal($event)"></animal-add>
    </div>
    <div class = "well">
      <animal-list [childAnimals] = "listOfAnimals" (clickSender)="editAnimal($event)"></animal-list>
    </div>
    <div class = "panel panel-default">
      <animal-edit [childSelectedAnimal] = "selectedAnimal" (clickDoneEditing)="finishedEditing()"></animal-edit>
    </div>
  </div>
  `
})

export class AppComponent {
  listOfAnimals: Animal[] = [
    new Animal('Tiger', 'Leo', 2, 'carnivore', 'West bay', 5, 'male', 'food, humans, Lewis', 'other tigers'),
    new Animal('otter', 'Pants', 1, 'herbivore', 'Water Exhibit', 2, 'male', 'playing, toys, water', 'not playing, no toys, no water'),
    new Animal('Mouse', 'Stiped Sweater', 3, 'herbivore', 'Lunch Room', 3, 'male', 'Cheese', 'Leo'),
    new Animal('Giraffe', 'Mark', 6, 'herbivore', 'Serengeti Park', 3, 'female', 'Being Photogenic', 'Leo'),
    new Animal('Panda', 'Frank', 4, 'herbivore', 'Panda Resort', 3, 'male', 'Eating', 'Leo'),
    new Animal('Zebra', 'Lewis (Current location unknown)', 144, 'herbivore', 'Parking lot?', 38, 'female', 'Escaping', 'Leo')
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

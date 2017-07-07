import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
  <div *ngIf="childSelectedAnimal">
    <h3>Edit Animal</h3>
    <label for="name">Edit Name:</label>
    <input [(ngModel])="childSelectedAnimal.name" autofocus>
    <label for="species">Edit Species:</label>
    <input [(ngModel])="childSelectedAnimal.species" autofocus>
    <label for="age">Edit Age:</label>
    <input [(ngModel])="childSelectedAnimal.age" autofocus>
    <button (click)="clickedFinishedEditing()">Done!</button>
  </div>
  `
})

export class AnimalEditComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() clickDoneEditing = new EventEmitter();

  clickedFinishedEditing(){
    this.clickDoneEditing.emit();
  }
}

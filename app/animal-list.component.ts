import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template:`
  <ul>
    <li *ngFor="let currentAnimal of childAnimals">{{currentAnimal.name}}</li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[];
  
}

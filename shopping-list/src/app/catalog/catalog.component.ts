import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: string[];
  filter: string = '';
  newCourse : string = '';

  constructor() {
    this.products = [];
  }

  // Function to add course
addCourse(){
  this.products.push(this.newCourse);
  //Reset input
  this.newCourse = '';
}
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: IProduct[];
  filter: string = '';
  newCourse : string = '';

  constructor() {
    this.products = [];
  }

  // Function to add course
addCourse(){
  this.products.push({name: this.newCourse, isDone: false});
  //Reset input
  this.newCourse = '';
}

getDiscountedClasses(product: IProduct){
  return {strikethrough: product.isDone};
}

removeProduct(product: IProduct){
  product.isDone = true;
}

}

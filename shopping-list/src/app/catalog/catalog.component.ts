import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: IProduct[];
  filter: string = '';
  newElement : string = '';

  constructor() {
    this.products = [];
  }

addShoppingElement(){
  this.products.push({name: this.newElement, isDone: false});
  //Reset input
  this.newElement = '';
}

isProductInShoppingCart(product: IProduct){
  return {strikethrough: product.isDone};
}

putProductToShoppingCart(product: IProduct){
  product.isDone = true;
}

}

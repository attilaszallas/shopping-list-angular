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

  constructor() {
    this.products = [
      {
        id: 1,
        name: "Paprika",
        imageName: "head-big-eye.png",
        category: "zöldség",
        quantity: 1,
        isDone: false,
      },
      {
        id: 17,
        name: "Zab",
        imageName: "base-spring.png",
        category: "zöldség",
        quantity: 1,
        isDone: true,
      },
    ];
  }

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName;
  }

  getFilteredProducts() {
    return this.filter === ''
    ? this.products
    : this.products.filter((product) => product.category === this.filter);
  }
}

import { Component } from '@angular/core';
import { Product } from '../models/models';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  // name: string = 'IPhone 13';
  // price: number = 999;
  // color: string = 'Red';
  // discount: number = 798;

  product: Product = {
    name: 'IPhone 13',
    price: 999,
    color: 'Red',
    discount: 25,
    inStock : 2
  };

  getDiscountedPrice(): number {
    return this.product.price - (this.product.price * this.product.discount) / 100;
  }
}

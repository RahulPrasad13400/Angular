import { Component } from '@angular/core';
import { Product } from '../models/models';
import { Search } from "./search/search";

@Component({
  selector: 'app-product-list',
  imports: [Search],
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
    inStock: 0,
    image: 'assets/images/iPhone14.webp',
  };

  getDiscountedPrice(): number {
    return this.product.price - (this.product.price * this.product.discount) / 100;
  }

  // EVENT BINDING
  // name : string = "John Doe"
  // public onNameChange(event : any){
  //   this.name = event.target.value
  // }

  addToCart: number = 0;
  public decreaseCount() {
    if(this.addToCart > 0){
      this.addToCart--
    }
  }
  public increaseCount(){
    this.addToCart++
  }
}

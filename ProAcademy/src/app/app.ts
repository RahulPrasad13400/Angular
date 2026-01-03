import { Component, signal } from '@angular/core';
import { TopHeader } from "./top-header/top-header";
import { Header } from "./header/header";
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [TopHeader, Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProAcademy');
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  imports: [],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss',
})
export class MainMenu {
  menuItemsList : string[] = ['Home', 'Products', 'About', 'Contact']
}

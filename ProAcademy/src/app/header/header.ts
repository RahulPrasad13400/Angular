import { Component } from '@angular/core';
import { TopMenu } from "./top-menu/top-menu";
import { MainMenu } from "./main-menu/main-menu";

@Component({
  selector: 'app-header,[app-header]',
  imports: [TopMenu, MainMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}

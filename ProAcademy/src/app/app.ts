import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopHeader } from "./top-header/top-header";
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopHeader, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProAcademy');
}

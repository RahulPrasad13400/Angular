import { Component, signal } from '@angular/core';
import { Rxjs } from "./rxjs/rxjs";

@Component({
  selector: 'app-root',
  imports: [Rxjs],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rxjs-basic');
}

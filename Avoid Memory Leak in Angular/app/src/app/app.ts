import { Component, signal } from '@angular/core';
import { Unsubscribe } from "./unsubscribe/unsubscribe";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Unsubscribe]
})
export class App {
  protected readonly title = signal('app');
}

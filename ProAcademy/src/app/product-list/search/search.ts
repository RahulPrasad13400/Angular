import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  public searchText: string = "Men's wear";

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}

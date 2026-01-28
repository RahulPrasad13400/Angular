import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { forkJoin, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-sample',
  imports: [ReactiveFormsModule],
  templateUrl: './sample.html',
  styleUrl: './sample.scss',
})
export class Sample {

  // FORKJOIN EXAMPLE

  // stateList$ = of(['Maharashtra', 'Gujarat', 'Rajasthan', 'Punjab', 'Haryana']);
  // cityData$ = of(['Ernakulam', 'Trivandrum', 'Kollam', 'Alappuzha', 'Kottayam']);

  // constructor() {
  //   forkJoin([this.stateList$, this.cityData$]).subscribe({
  //     next : ([state, city]) => {
  //       console.log("state : ", state);
  //       console.log("city : ", city);
  //     }
  //   })    

  // }

  //----------------------------------------------------------------------------

  // FORKJOIN API EXAMPLE

  // http = inject(HttpClient);
  // posts$ = this.http.get('https://jsonplaceholder.typicode.com/posts');
  // comments$ = this.http.get('https://jsonplaceholder.typicode.com/comments');

  // constructor(){
  //   forkJoin([this.posts$, this.comments$]).subscribe({
  //     next : ([posts, comments]) => {
  //       console.log("posts : ", posts);
  //       console.log("comments : ", comments);
  //     }
  //   })
  // }

  //----------------------------------------------------------------------------

  // SWITCH MAP 

  http = inject(HttpClient);
  searchControl : FormControl = new FormControl()

  constructor() {
    this.searchControl.valueChanges.pipe(
      // Only the latest search term is processed, all previous pending requests are cancelled
      switchMap((search)=>this.http.get('https://jsonplaceholder.typicode.com/posts?id='+search))
    ).subscribe({
      next : (val) => console.log(val)
    })
  }
}

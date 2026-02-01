import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { concatMap, exhaustMap, forkJoin, from, map, mergeMap, of, switchMap } from 'rxjs';

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

  // http = inject(HttpClient);
  // searchControl : FormControl = new FormControl()

  // constructor() {
  //   this.searchControl.valueChanges.pipe(
  //     // Only the latest search term is processed, all previous pending requests are cancelled
  //     switchMap((search)=>this.http.get('https://jsonplaceholder.typicode.com/posts?id='+search))
  //   ).subscribe({
  //     next : (val) => console.log(val)
  //   })
  // }

  // MERGE MAP 
  // constructor() {
  //   from([1, 2, 3]).pipe(
  //     mergeMap(num => of(num*10))
  //   )
  //   .subscribe({
  //     next : (res) => console.log(res),
  //     error : (err) => console.log(err)
  //   })
  // }
  // Output
  // 10
  // 20
  // 30

  http = inject(HttpClient);
  searchControl : FormControl = new FormControl()

  constructor() {
    this.searchControl.valueChanges.pipe(
      // Only the latest search term is processed, all previous pending requests are cancelled
      exhaustMap((num)=>this.http.get('https://jsonplaceholder.typicode.com/posts?id='+num))
    ).subscribe({
      next : (val) => console.log(val)
    })
  }

}

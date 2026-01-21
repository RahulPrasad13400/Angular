import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { filter, from, interval, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-sample',
  imports: [ReactiveFormsModule],
  templateUrl: './sample.html',
  styleUrl: './sample.scss',
})
export class Sample {
  // numberList$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

  // constructor() {
  //   this.numberList$
  //     .pipe(
  //       filter((num) => {
  //         console.log('PIPE WORKED');
  //         return num % 2 === 0;
  //       })
  //     )
  //     .subscribe((res: number) => {
  //       console.log('sUBSCRIBE WORKED');
  //       console.log(res);
  //     });
  // }

  // numberList$ = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  // constructor() {
  //   this.numberList$
  //     .pipe(map((arr: number[]) => arr.filter((num) => num % 2 == 0)))
  //     .subscribe((res: number[]) => {
  //       console.log(res);
  //     });
  // }

  // http = inject(HttpClient);

  // constructor() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .pipe(
  //       tap((postList: any) => console.log('Tap : ', postList)),
  //       map((postList: any) => postList.map((res: any) => ({ id: res.id, body: res.body })))
  //     )
  //     .subscribe((res) => console.log(res));
  // }

  // http = inject(HttpClient);

  // timeInterval = interval(1000);

  // searchControl = new FormControl();

  // constructor() {
  //   this.searchControl.valueChanges
  //     .pipe(filter((searchText) => searchText.length >= 3))
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }


  timeInterval = interval(1000)
  
  constructor(){
    this.timeInterval.pipe(
      take(6) // limit the observable to emit only the first 6 values.
    ).subscribe((res : number)=> {
      console.log(res)
    })
  }
}

import { Component } from '@angular/core';
import { from, interval, Observable, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [],
  templateUrl: './rxjs.html',
  styleUrl: './rxjs.scss',
})
export class Rxjs {
  countryList: string[] = ['India', 'USA', 'Germany'];

  // Country List Obeservable
  // by using of we can create a observable
  countryList$: Observable<string[]> = of(['India', 'USA', 'Germany']);

  // using for
  countryList2$ = from(['India', 'USA', 'Germany']);

  myInterval$ = interval(2000);

  timer$ = timer(2000);

  constructor() {
    this.timer$.subscribe((res) => console.log('Timer :', res));

    this.myInterval$.subscribe((res) => console.log('Interval : ', res));

    // it showed each element of the array seperately
    this.countryList2$.subscribe((res) => console.log('country list 2 : ', res));

    // it shows a array in the console
    this.countryList$.subscribe((res: string[]) => console.log(res));

    const myObs$ = new Observable<string>((value) => {
      value.next("Hello I'm Rahul");
    });

    myObs$.subscribe({
      next: (res: string) => {
        // debugger;
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}

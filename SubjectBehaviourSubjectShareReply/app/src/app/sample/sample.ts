import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, Subject } from 'rxjs';
import { UserService } from '../user-service';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.scss',
})
export class Sample implements OnInit {
  // SUBJECT

  // studentName$ = new Subject();

  // rollNo$ = new Subject<number>();
  // constructor() {
  //   this.studentName$.next('Angular 20');
  // }

  // ngOnInit(): void {
  //   this.studentName$.subscribe({
  //     next: (res) => console.log(res),
  //   });
  // }

  // ---------------------------------------------------------------------------

  // BEHAVIOR SUBJECT

  // studentName$ = new BehaviorSubject('Rahul Prasad');

  // ngOnInit(): void {
  //   this.studentName$.subscribe({
  //     next: (res) => console.log(res),
  //   });
  //   this.studentName$.next('Virat Kholi');
  // }

  // ---------------------------------------------------------------------------
  // key type
  // private userDetails = new Map<number, Observable<any>>();
  //                                     // value type
  // // number is a key type while Observable<any> is a value type

  // ---------------------------------------------------------------------------

  private userService = inject(UserService);

  constructor() {
    this.userService.courseDuration$.next('Rocky');
  }

  ngOnInit(): void {
    this.userService.courseDuration$.subscribe((res) => console.log(res));

    this.userService.courseDuration$.next('React');
  }
}

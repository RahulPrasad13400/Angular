import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);

  public courseDuration$ = new BehaviorSubject<string>('2 Months');

  getUser() {
    return {
      id: 1,
      name: 'Rahul Prasad',
      course: 'Angular',
    };
  }

  // Normal Service Call
  // getUserById(id : number){
  //   return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  // }

  // Caching

  private userDetails = new Map<number, Observable<any>>();

  getUserById(id: number): any | undefined {
    if (!this.userDetails.has(id)) {
      const userDetailObs = this.http
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .pipe(shareReplay(1));
      this.userDetails.set(id, userDetailObs);
    }
    return this.userDetails.get(id);
  }
}

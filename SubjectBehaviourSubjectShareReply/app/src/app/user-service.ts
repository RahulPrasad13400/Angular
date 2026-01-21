import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public courseDuration$ = new BehaviorSubject<string>("2 Months");

  getUser(){
    return {
      id : 1,
      name : "Rahul Prasad",
      course : "Angular",
    }
  }
}

import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  imports: [AsyncPipe],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.scss',
})
export class Unsubscribe implements OnInit, OnDestroy {
  // If its only one subscription (only one api call is taking place) you can do it like this
  // http = inject(HttpClient);
  // subscription!: Subscription;

  // private getPosts() {
  //   this.subscription = this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //   });
  // }

  // ngOnInit(): void {
  //   this.getPosts();
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  // ---------------------------------------------------------------------------

  // // If there are multiple api calls taking place then we have to do
  // http = inject(HttpClient);
  // // Instead of one subscription we have to create a array of subscription
  // subscriptionList: Subscription[] = [];

  // private getPosts() {
  //   this.subscriptionList.push(
  //     this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     })
  //   );
  // }

  // private getAlbum() {
  //   this.subscriptionList.push(
  //     this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     })
  //   );
  // }

  // ngOnInit(): void {
  //   this.getPosts();
  //   this.getAlbum();
  // }

  // ngOnDestroy(): void {
  //   this.subscriptionList.forEach((sub) => {
  //     sub.unsubscribe();
  //   });
  // }

  // ---------------------------------------------------------------------------

  // TAKEUNTIL ANOTHER WAY OF PREVENTING MEMORY LEAK
  // http = inject(HttpClient);

  // subTakeUntil!: Subject<void>;

  // private getPosts() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .pipe(takeUntil(this.subTakeUntil))
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     });
  // }

  // private getAlbum() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/albums')
  //     .pipe(takeUntil(this.subTakeUntil))
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     });
  // }

  // ngOnDestroy(): void {
  //   this.subTakeUntil.next();
  // }
  // ngOnInit(): void {
  //   this.getPosts();
  //   this.getAlbum();
  // }

  // ---------------------------------------------------------------------------

  // Way 4 ------ Take
  // http = inject(HttpClient);

  // subTakeUntil!: Subject<void>;

  // private getPosts() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/posts')
  //     .pipe(take(1)) // take(n) emits only the first n values from the source observable and completes afterward. This prevents memory leaks by auto-unsubscribing after the specified count.
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     });
  // }

  // private getAlbum() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/albums')
  //     .pipe(takeUntil(this.subTakeUntil))
  //     .subscribe({
  //       next: (data) => {
  //         console.log(data);
  //       },
  //       error: (error) => {
  //         console.log(error);
  //       },
  //     });
  // }

  // ngOnDestroy(): void {
  //   this.subTakeUntil.next();
  // }
  // ngOnInit(): void {
  //   this.getPosts();
  //   this.getAlbum();
  // }

  // ---------------------------------------------------------------------------

  // Way 5 ------------ using async pipe
  http = inject(HttpClient);

  postList$ = new Observable<any[]>();

  ngOnInit(): void {
    // we aren't subscribing here we have to use async in the html
    this.postList$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  ngOnDestroy(): void {}
}

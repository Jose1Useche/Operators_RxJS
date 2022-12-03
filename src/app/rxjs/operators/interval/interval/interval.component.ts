import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnDestroy {
  mySubscription: Subscription;

  constructor() { }
  
  ngOnInit(): void {
    this.mySubscription = interval(1000).subscribe(console.log);
  }
  
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}

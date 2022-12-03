import { Component, OnInit } from '@angular/core';
import { combineLatest, interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  mySubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    
    const firstTimer = timer(0, 1000); 
    const secondTimer = timer(500, 1000); 
    // const thirdTimer = timer(2000, 1000); 
    // const forthTimer = timer(3000, 1000); 
    
    this.mySubscription = combineLatest([firstTimer, secondTimer, /*thirdTimer, forthTimer,*/ ]).subscribe(v => console.log(v));
    
    setTimeout(() => {
      this.mySubscription.unsubscribe();
      // firstTimer.subscribe(console.log);
      // secondTimer.subscribe(console.log);
      // thirdTimer.subscribe(console.log);
      // firstTimer.subscribe(console.log);
    }, 10000);
  }

}

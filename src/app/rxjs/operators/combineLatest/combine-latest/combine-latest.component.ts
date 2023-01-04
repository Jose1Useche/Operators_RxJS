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

    //----------------------------------//
    //--Combinar dos Observables timer--//
    
    const firstTimer = timer(0, 1000); 
    const secondTimer = timer(500, 1000); 
    
    this.mySubscription = combineLatest([firstTimer, secondTimer, /*thirdTimer, forthTimer,*/ ]).subscribe(v => console.log(v));
  
    //--Combinar dos Observables timer--//
    //----------------------------------//
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit, OnDestroy {

  mySubscription: Subscription;

  constructor() { }
  
  ngOnInit(): void {
    const ghibliFilmsResponse$ = ajax("https://ghibliapi.herokuapp.com/films");
    
    this.mySubscription = ghibliFilmsResponse$.subscribe(data => console.log(data.response));
  }
  
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}

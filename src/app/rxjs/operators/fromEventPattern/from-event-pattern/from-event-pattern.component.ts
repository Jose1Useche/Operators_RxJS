import { Component, OnInit } from '@angular/core';
import { fromEventPattern, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event-pattern',
  templateUrl: './from-event-pattern.component.html',
  styleUrls: ['./from-event-pattern.component.css']
})
export class FromEventPatternComponent implements OnInit {

  mySubscription: Subscription;

  constructor() { }

  ngOnInit(): void {

    function handler() {
      console.log('Hola a todos')
    }

    function addClickHandler() {
      document.getElementById('miBoton').addEventListener("click", handler);
    }
    
    function removeClickHandler() {
      document.getElementById('miBoton').removeEventListener("click", handler);
    }
    
    // const clicks = fromEventPattern(addClickHandler, removeClickHandler);

    // this.mySubscription = clicks.subscribe((x) => console.log(x));

    this.mySubscription = fromEventPattern(addClickHandler, removeClickHandler).subscribe((x) => console.log(x));
  }

  desuscribir() {
    this.mySubscription.unsubscribe();
  }

}

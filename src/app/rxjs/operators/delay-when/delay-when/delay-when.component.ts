import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { delayWhen, map } from 'rxjs/operators';

@Component({
  selector: 'app-delay-when',
  templateUrl: './delay-when.component.html',
  styleUrls: ['./delay-when.component.css']
})
export class DelayWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------------//
    //--Retrasa la emisión de cada tecla pulsada durante 2 segundos--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      map(({ code }) => code)
    );
    
    key$.pipe(delayWhen(() => interval(2000))).subscribe(console.log);

    //--Retrasa la emisión de cada tecla pulsada durante 2 segundos--//
    //---------------------------------------------------------------//

    //-------------------------------------------------------------------------------------//
    //--Retrasa cada click durante una cantidad de tiempo aleatoria, entre 0 y 5 segundos--//

    const clicks = fromEvent(document, 'click');
    clicks.pipe(delayWhen(event => interval(Math.random() * 5000))).subscribe(x => console.log(x));

    //--Retrasa cada click durante una cantidad de tiempo aleatoria, entre 0 y 5 segundos--//
    //-------------------------------------------------------------------------------------//
  }

}

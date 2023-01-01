import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css']
})
export class TakeUntilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------------//
    //--Emitir valores hasta que timer$ emita a los 4 segundos--//

    const number$ = interval(1000);
    const timer$ = timer(4000);

    number$.pipe(takeUntil(timer$)).subscribe(console.log);

    //--Emitir valores hasta que timer$ emita a los 4 segundos--//
    //----------------------------------------------------------//

    //-----------------------------------------------//
    //--Emitir valores hasta que se pulse una tecla--//

    const number2$ = interval(1000);
    const key$ = fromEvent(document, "keydown");

    number2$.pipe(takeUntil(key$)).subscribe(console.log); 
    // Salida: O, 1, 2, 3, 4 (Pulsar tecla)

    //--Emitir valores hasta que se pulse una tecla--//
    //-----------------------------------------------//
  }

}

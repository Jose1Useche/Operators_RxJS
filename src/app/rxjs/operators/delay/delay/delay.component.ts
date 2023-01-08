import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------------------------//
    //--Retrasa la emisión de cada tecla pulsada durante dos segundos--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      map(({ code }) => code)
    );
    
    key$.pipe(delay(2000)).subscribe(console.log);

    //--Retrasa la emisión de cada tecla pulsada durante dos segundos--//
    //-----------------------------------------------------------------//

    //------------------------------------------------------------------------//
    //--Retrasa la emisión de cada tecla pulsada hasta una fecha determinada--//

    // const key2$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
    //   map(({ code }) => code)
    // );
    
    // key2$.pipe(delay(new Date("February 10, 2025"))); // Salida: Tendremos que esperar unos años para ver el resultado

    //--Retrasa la emisión de cada tecla pulsada hasta una fecha determinada--//
    //------------------------------------------------------------------------//
  }

}

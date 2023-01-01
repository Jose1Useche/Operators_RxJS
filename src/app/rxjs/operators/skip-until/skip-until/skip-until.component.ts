import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';
import { filter, map, skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.css']
})
export class SkipUntilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------------------------------------//
    //--Saltar la secuencia de números hasta que se pulse la barra espaciadora--//

    const number$ = interval(1000);

    const key$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      map(({ code }) => code),
      filter(code => code === "Space")
    );

    number$.pipe(skipUntil(key$)).subscribe(console.log);
    // Salida: (4s) (Pulsar barra espaciadora) 4, 5, 6...

    //--Saltar la secuencia de números hasta que se pulse la barra espaciadora--//
    //--------------------------------------------------------------------------//

    //-------------------------------------------------------------//
    //--Saltar la secuencia de números hasta que pasen 4 segundos--//

    const number2$ = interval(1000);
    const timer$ = timer(4000);
    
    number2$.pipe(skipUntil(timer$)).subscribe(console.log); // Salida: 3, 4, 5, 6, 7, 8...

    //--Saltar la secuencia de números hasta que pasen 4 segundos--//
    //-------------------------------------------------------------//
  }

}

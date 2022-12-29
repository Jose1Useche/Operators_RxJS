import { Component, OnInit } from '@angular/core';
import { EMPTY, fromEvent, interval } from 'rxjs';
import { filter, map, mergeAll, tap, windowToggle } from 'rxjs/operators';

@Component({
  selector: 'app-window-toggle',
  templateUrl: './window-toggle.component.html',
  styleUrls: ['./window-toggle.component.css']
})
export class WindowToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------------------------------------------------------------------//
    //--Abrir una nueva ventana cada vez que se pulse una tecla numérica, cuya duración esté determinada por el valor de la tecla que se pulse.--//

    const number$ = interval(1000);// Emitirá cuando se presione una tecla numérica (0, 1, 2, 3, 4, 5, 6, 7, 8 o 9)

    const numericKey$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      map(({ key }) => +key),
      filter((key) => !isNaN(key))
    );

    number$
      .pipe(
        windowToggle(numericKey$, (n) => interval(n * 1000)),
        tap((_) => console.log("Nueva ventana")),
        mergeAll()
      )
      .subscribe(console.log);// Salida: (pulsar 5) Nueva ventana, 0, 1, 2, 3, 4 (pulsar 2) Nueva ventana, 5, 6

    //--Abrir una nueva ventana cada vez que se pulse una tecla numérica, cuya duración esté determinada por el valor de la tecla que se pulse.--//
    //-------------------------------------------------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------//
    //--Cada 2 segundos, emitir los eventos clicks de los siguientes 500ms--//

    const clicks = fromEvent(document, "click");
    const openings = interval(1000);
    const result = clicks.pipe(
      windowToggle(openings, (i) => (i % 2 ? interval(500) : EMPTY)),
      mergeAll()
    );
    result.subscribe((x) => console.log(x));

    //--Cada 2 segundos, emitir los eventos clicks de los siguientes 500ms--//
    //----------------------------------------------------------------------//
  }

}

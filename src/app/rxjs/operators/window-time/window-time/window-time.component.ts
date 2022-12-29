import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, mergeAll, take, tap, windowTime } from 'rxjs/operators';

@Component({
  selector: 'app-window-time',
  templateUrl: './window-time.component.html',
  styleUrls: ['./window-time.component.css']
})
export class WindowTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------//
    //--Recoge teclas pulsadas en una nueva ventana cada 5s--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        windowTime(5000),
        tap((_) => console.log("Nueva Ventana")),
        // Transformando el Observable de orden superior en uno de primer orden
        mergeAll()
      )
      .subscribe(console.log); // Salida: Nueva Ventana, KeyR, KeyX, KeyJ, KeyS (5s) Nueva Ventana, KeyO...

    //--Recoge teclas pulsadas en una nueva ventana cada 5s--//
    //-------------------------------------------------------//

    //-------------------------------------------------------------------------------------------//
    //--Emitir como mucho 2 eventos click en ventanas de 1s, abriendo una ventana nueva cada 5s--//

    const clicks = fromEvent(document, "click");
    const result = clicks.pipe(
      windowTime(1000, 5000),
      map((win) => win.pipe(take(2))), // Cada ventana contiene como mucho 2 emisiones
      mergeAll() // 'Aplastar' el Observable de Observables
    );
    result.subscribe((x) => console.log(x));

    //--Emitir como mucho 2 eventos click en ventanas de 1s, abriendo una ventana nueva cada 5s--//
    //-------------------------------------------------------------------------------------------//

    //-------------------------------------------------------------------------------------//
    //--Igual que el ejemplo anterior, pero con maxWindowCount en lugar del operador take--//

    const clicks2 = fromEvent(document, "click");
    const result2 = clicks2.pipe(
      windowTime(1000, 5000, 2), // Cada ventana contiene como mucho 2 emisiones
      mergeAll() // 'Aplastar' el Observable de Observables
    );
    result2.subscribe((x) => console.log(x));

    //--Igual que el ejemplo anterior, pero con maxWindowCount en lugar del operador take--//
    //-------------------------------------------------------------------------------------//
  }

}

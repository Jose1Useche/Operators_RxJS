import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, mergeAll, tap, windowWhen } from 'rxjs/operators';

@Component({
  selector: 'app-window-when',
  templateUrl: './window-when.component.html',
  styleUrls: ['./window-when.component.css']
})
export class WindowWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------------------------------------------//
    //--Recoger una secuencia ascendente de números en una ventana. Cada vez que se haga click, abrir una nueva ventana--//

    const number$ = interval(1000);

    number$
      .pipe(
        windowWhen(() => fromEvent<KeyboardEvent>(document, "click")),
        tap(() => console.log("Nueva ventana")),
        mergeAll()
      )
      .subscribe(console.log);// Salida: Nueva ventana, 0, 1, 2, 3 (click) Nueva ventana, 4, 5, 6...

    //--Recoger una secuencia ascendente de números en una ventana. Cada vez que se haga click, abrir una nueva ventana--//
    //-------------------------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------------------//
    //--Recoger teclas pulsadas en una ventana de duración aleatoria de entre 1 y 4 segundos--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        windowWhen(() => interval(1000 + Math.random() * 3000)),
        tap(() => console.log("Nueva ventana")),
        // Transformando el Observable de orden superior en uno de primer orden
        mergeAll()
      )
      .subscribe(console.log);
    // Salida: Nueva ventana, KeyR, KeyX (x segundos aleatorios después) Nueva ventana, KeyJ, KeyS...

    //--Recoger teclas pulsadas en una ventana de duración aleatoria de entre 1 y 4 segundos--//
    //----------------------------------------------------------------------------------------//
  }

}

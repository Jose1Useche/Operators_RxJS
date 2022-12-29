import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, mergeAll, skip, tap, windowCount } from 'rxjs/operators';

@Component({
  selector: 'app-window-count',
  templateUrl: './window-count.component.html',
  styleUrls: ['./window-count.component.css']
})
export class WindowCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------//
    //--Recoge un máximo de cuatro teclas pulsadas en una ventana--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        windowCount(4),
        tap(() => console.log("Nueva Ventana")),
        // Transformando el Observable de orden superior en uno de primer orden
        mergeAll()
      )
      .subscribe(console.log); // Salida: Nueva Ventana, KeyR, KeyX, KeyJ, KeyS, Nueva Ventana, KeyO...

    //--Recoge un máximo de cuatro teclas pulsadas en una ventana--//
    //-------------------------------------------------------------//

    //------------------------------------------------------------------//
    //--Ignorar cada 3er evento click, comenzando a partir del primero--//

    const clicks = fromEvent(document, "click");
    const result = clicks.pipe(
      windowCount(3),
      map((win) => win.pipe(skip(1))), // saltar el primero de cada 3 clicks
      mergeAll() // 'Aplastar' el Observable de Observables
    );
    result.subscribe((x) => console.log(x));

    //--Ignorar cada 3er evento click, comenzando a partir del primero--//
    //------------------------------------------------------------------//

    //------------------------------------------------------------------//
    //--Ignorar cada 3er evento click, comenzando a partir del tercero--//

    const clicks2 = fromEvent(document, "click");
    const result2 = clicks2.pipe(
      windowCount(2, 3),
      mergeAll() // 'Aplastar' el Observable de Observables
    );
    result2.subscribe((x) => console.log(x));

    //--Ignorar cada 3er evento click, comenzando a partir del tercero--//
    //------------------------------------------------------------------//
  }

}

import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { buffer, map, mergeAll, mergeMap, take, tap, toArray, window } from 'rxjs/operators';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------//
    //Comparacion entre buffer y window--//

    const source = interval(500);

    // source.pipe(buffer(interval(2000))).subscribe(console.log);
    // source.pipe(window(interval(2000))).subscribe(console.log);

    source.pipe(
      window(interval(2000)),
      mergeMap(obs => obs.pipe(toArray()))
    ).subscribe(console.log);

    //Comparacion entre buffer y window--//
    //-----------------------------------//

    //------------------------------------------------------------------//
    //--Acumular el código de las teclas pulsadas en una ventana de 5s--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        window(interval(5000).pipe(tap((_) => console.log("Nueva Ventana")))),
        // Transformando el Observable de orden superior en uno de primer orden
        mergeAll()
      )
      .subscribe(console.log);
    // Salida: Nueva Ventana, KeyR, KeyX, KeyJ, KeyS (5s) Nueva Ventana, KeyO...

    //--Acumular el código de las teclas pulsadas en una ventana de 5s--//
    //------------------------------------------------------------------//

    //-----------------------------------------------------------//
    //--En una ventana de 1s, emitir como mucho 2 eventos click--//

    const clicks = fromEvent(document, "click");
    const sec = interval(1000);
    const result = clicks.pipe(
      window(sec),
      map((win) => win.pipe(take(2))), // Cada ventana contiene como mucho 2 emisiones
      mergeAll() // 'Aplasta' el Observable de orden superior
    );
    result.subscribe((x) => console.log(x));

    //--En una ventana de 1s, emitir como mucho 2 eventos click--//
    //-----------------------------------------------------------//
  }

}

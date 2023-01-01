import { Component, OnInit } from '@angular/core';
import { from, interval, range } from 'rxjs';
import { takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css']
})
export class TakeLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------//
    //--Emitir el último valor de un Observable--//

    const language$ = from([
      { name: "Java", type: "Orientado a objetos" },
      { name: "Scala", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language$.pipe(takeLast(1)).subscribe(console.log); // Salida: { name: "Haskell", type: "Funcional" }

    //--Emitir el último valor de un Observable--//
    //-------------------------------------------//

    //-------------------------------------------------------------------------//
    //--Si el Observable fuente emite más de count valores, se emitirán todos--//

    const range$ = range(0, 5);

    range$
      .pipe(takeLast(10))
      .subscribe(console.log, console.error, () => console.log("Completado")); // Salida: 0, 1, 2, 3, 4

    //--Si el Observable fuente emite más de count valores, se emitirán todos--//
    //-------------------------------------------------------------------------//

    //----------------------------------------------------------------------//
    //--Si el Observable fuente no se completa, no se emitirá ningún valor--//

    const number$ = interval(1000);

    number$
      .pipe(takeLast(5))
      .subscribe(console.log, console.error, () => console.log("Complete"));

    //--Si el Observable fuente no se completa, no se emitirá ningún valor--//
    //----------------------------------------------------------------------//
  }

}

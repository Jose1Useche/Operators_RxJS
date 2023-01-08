import { Component, OnInit } from '@angular/core';
import { EMPTY, fromEvent, timer } from 'rxjs';
import { defaultIfEmpty, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.css']
})
export class DefaultIfEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------------------//
    //--Como el Observable está vacío, se emitirá el valor por defecto--//

    const empty$ = EMPTY;

    empty$.pipe(defaultIfEmpty("La respuesta es 42")).subscribe(console.log);

    //--Como el Observable está vacío, se emitirá el valor por defecto--//
    //------------------------------------------------------------------//

    //----------------------------------------------------------------------------------------------//
    //--Si no se presiona ninguna tecla en 4 segundos, se emitirá el valor de la tecla por defecto--//

    const defaultKey = "Space";

    const key$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      map(({ code }) => code),
      takeUntil(timer(4000))
    );

    key$.pipe(defaultIfEmpty(defaultKey)).subscribe(console.log);

    //--Si no se presiona ninguna tecla en 4 segundos, se emitirá el valor de la tecla por defecto--//
    //----------------------------------------------------------------------------------------------//
  }

}

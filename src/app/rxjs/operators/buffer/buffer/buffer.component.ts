import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { buffer, filter } from 'rxjs/operators';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------------------------//
    //--Con cada tecla pulsada, emitir el array de los números emitidos desde la última tecla pulsada--//

    const number$ = interval(1000);
    const key$ = fromEvent(document, "keydown");

    number$.pipe(buffer(key$)).subscribe(console.log);// Salida: (tecla pulsada) [0, 1, 2, 3] (tecla pulsada) [4, 5]

    //--Con cada tecla pulsada, emitir el array de los números emitidos desde la última tecla pulsada--//
    //-------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------//
    //--Emitir los clicks hechos en un intervalo de 5 segundos--//

    const click$ = fromEvent(document, "click");
    const clickInterval$ = interval(5000);

    click$
      .pipe(
        buffer(clickInterval$),
        filter(({ length }) => length > 0)//Si no se hace ningún click en el intervalo, no se emitirá nada.
      )
      .subscribe(console.log);// Output: (5s) [MouseEvent, MouseEvent] (5s) [MouseEvent]

    //--Emitir los clicks hechos en un intervalo de 5 segundos--//
    //----------------------------------------------------------//
  }

}

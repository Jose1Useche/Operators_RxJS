import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------------------------//
    //--Lanzar un error si no se presiona ninguna tecla en 5 segundos--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        timeout(5000)
      )
      .subscribe(console.log, console.error);
    // Salida: (5s) (Error) Error: Timeout has occurred

    //--Lanzar un error si no se presiona ninguna tecla en 5 segundos--//
    //-----------------------------------------------------------------//

    //-----------------------------------------------------------------------//
    //--Utilizar una fecha para comprobar si el Observable se ha completado--//

    const seconds = interval(1000);

    seconds.pipe(timeout(new Date("December 17, 2020 03:24:00"))).subscribe(
      (value) => console.log(value), // Will emit values as regular `interval` would
      // until December 17, 2020 at 03:24:00.
      (err) => console.log(err) // Emitirá un error el día December 17, 2020 a las 03:24:00,
      // ya que el Observable no se habrá completado
    );

    //--Utilizar una fecha para comprobar si el Observable se ha completado--//
    //-----------------------------------------------------------------------//
  }

}

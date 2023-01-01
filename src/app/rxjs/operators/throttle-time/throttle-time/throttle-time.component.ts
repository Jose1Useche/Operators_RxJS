import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, zip } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.css']
})
export class ThrottleTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------------------------------------------------------//
    //--Emitir la tecla pulsada, ignorar todos los valores siguientes durante 2 segundos, y repetir--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$.pipe(throttleTime(2000)).subscribe(({ code }) => console.log(code));

    //--Emitir la tecla pulsada, ignorar todos los valores siguientes durante 2 segundos, y repetir--//
    //-----------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------//
    //--Emitir un valor, ignorar todos los valores durante 2 segundos, y repetir--//

    // El Observable fruit$ emite una fruta cada segundo
    const fruit$ = zip(
      from(["Fresa", "Cereza", "Arándano", "Mora", "Frambuesa", "Grosella"]),
      interval(1000)
    ).pipe(map(([fruit]) => fruit),
           throttleTime(2000)
      ).subscribe(console.log); // Salida: Fresa, Mora

    //--Emitir un valor, ignorar todos los valores durante 2 segundos, y repetir--//
    //----------------------------------------------------------------------------//
  }

}

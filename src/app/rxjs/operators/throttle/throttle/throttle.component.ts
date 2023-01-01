import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, zip } from 'rxjs';
import { map, throttle } from 'rxjs/operators';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.css']
})
export class ThrottleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------------------------------------------------------//
    //--Emitir la tecla pulsada, ignorar todos los valores siguientes durante 2 segundos, y repetir--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(throttle(() => interval(2000)))
      .subscribe(({ code }) => console.log(code));

    //--Emitir la tecla pulsada, ignorar todos los valores siguientes durante 2 segundos, y repetir--//
    //-----------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------//
    //--Emitir un valor, ignorar todos los valores durante 2 segundos, y repetir--//

    // El Observable language$ emite un lenguaje cada segundo
    const language$ = zip(
      from(["JavaScript", "TypeScript", "Java", "C#", "Go", "Ruby"]),
      interval(1000)
    ).pipe(
      map(([valorDeLanguage]) => valorDeLanguage),
      throttle(() => interval(2000))
      ).subscribe(console.log);
    // Salida: JavaScript, C#

    //--Emitir un valor, ignorar todos los valores durante 2 segundos, y repetir--//
    //----------------------------------------------------------------------------//
  }

}

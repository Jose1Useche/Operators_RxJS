import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------------------------------------------------------//
    //--Emitir el valor más reciente desde el último muestreo, realizado cuando interval emite (cada 2s)--//

    const number$ = interval(1000);

    number$.pipe(sample(interval(2000))).subscribe(console.log);

    //--Emitir el valor más reciente desde el último muestreo, realizado cuando interval emite (cada 2s)--//
    //----------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------------------------------//
    //--Emitir el valor más reciente desde el último muestreo, realizado cada vez que se pulsa una tecla--//

    const number2$ = interval(1000);
    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    number2$
      .pipe(sample(key$))
      .subscribe((n) =>
        console.log(`El último valor emitido tras la última tecla pulsada es: ${n}`)
      ); // Salida: El último valor emitido tras la última tecla pulsada es: n

    //--Emitir el valor más reciente desde el último muestreo, realizado cada vez que se pulsa una tecla--//
    //----------------------------------------------------------------------------------------------------//
  }

}

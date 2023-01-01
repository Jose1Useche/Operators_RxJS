import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

@Component({
  selector: 'app-sample-time',
  templateUrl: './sample-time.component.html',
  styleUrls: ['./sample-time.component.css']
})
export class SampleTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------------------------------------//
    //--Emitir el valor más reciente desde el último muestreo, realizado cada 2 segundos--//

    const number$ = interval(1000);

    number$.pipe(sampleTime(2000)).subscribe(console.log); // Salida: 0, 2, 4, 6, 8...

    //--Emitir el valor más reciente desde el último muestreo, realizado cada 2 segundos--//
    //------------------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------//
    //--Emitir la tecla pulsada más reciente desde el último muestreo, realizado cada 2 segundos--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        sampleTime(2000),
        map(({ code }) => code)
      )
      .subscribe((code) =>
        console.log(`La tecla pulsada más reciente es: ${code}`)
      );

    //--Emitir la tecla pulsada más reciente desde el último muestreo, realizado cada 2 segundos--//
    //--------------------------------------------------------------------------------------------//
  }

}

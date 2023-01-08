import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

@Component({
  selector: 'app-time-interval',
  templateUrl: './time-interval.component.html',
  styleUrls: ['./time-interval.component.css']
})
export class TimeIntervalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------------------------------------------------------------------//
    //--Emitir el valor de la tecla pulsada, además del tiempo transcurrido desde la última tecla presionada--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(timeInterval())
      .subscribe(({ value, interval }) =>
        console.log(
          `${value.code}: ${interval}ms han pasado desde la última tecla pulsada`
        )
      );

    //--Emitir el valor de la tecla pulsada, además del tiempo transcurrido desde la última tecla presionada--//
    //--------------------------------------------------------------------------------------------------------//
  }

}

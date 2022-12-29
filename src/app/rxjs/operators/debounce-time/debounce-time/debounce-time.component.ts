import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------------------------------//
    //--Emitir la tecla pulsada más reciente, tras una sucesión rápida de teclas--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$.pipe(debounceTime(500)).subscribe(({ code }) => console.log(code));

    //--Emitir la tecla pulsada más reciente, tras una sucesión rápida de teclas--//
    //----------------------------------------------------------------------------//

    //--------------------------------------------------------------------------//
    //--Emitir la posición del último click tras una sucesión rápida de clicks--//

    const click$ = fromEvent<MouseEvent>(document, "click");

    click$
      .pipe(debounceTime(1000))
      .subscribe(({ screenX, screenY }) =>
        console.log(
          `Tu último click fue en la posición x: ${screenX}, y: ${screenY}`
        )
      );

    //--Emitir la posición del último click tras una sucesión rápida de clicks--//
    //--------------------------------------------------------------------------//
  }

}

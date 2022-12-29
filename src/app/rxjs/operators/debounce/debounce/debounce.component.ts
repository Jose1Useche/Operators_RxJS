import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------------------------------//
    //--Emitir la tecla pulsada más reciente, tras una sucesión rápida de teclas--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(debounce(() => interval(500)))
      .subscribe(({ code }) => console.log(code));

    //--Emitir la tecla pulsada más reciente, tras una sucesión rápida de teclas--//
    //----------------------------------------------------------------------------//

    //--------------------------------------------------------------------------//
    //--Emitir la posición del último click tras una sucesión rápida de clicks--//

    const click$ = fromEvent<MouseEvent>(document, "click");

    click$
      .pipe(debounce(() => interval(1000)))
      .subscribe(({ screenX, screenY }) =>
        console.log(
          `Tu último click ha sido en la posición x: ${screenX}, y: ${screenY}`
        )
      );

    //--Emitir la posición del último click tras una sucesión rápida de clicks--//
    //--------------------------------------------------------------------------//
  }

}

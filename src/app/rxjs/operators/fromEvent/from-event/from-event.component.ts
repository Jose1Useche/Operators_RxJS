import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //-------------------------------------------------------------//
    //------------Crear un Observable que emite clicks-------------//

    const click$ = fromEvent<MouseEvent>(document.querySelector('button'), "click");

    click$.subscribe((click) => console.log(click));

    //------------Crear un Observable que emite clicks-------------//
    //-------------------------------------------------------------//

    //----------------------------------------------------------------------//
    //------------Crear un Observable que emite teclas pulsadas-------------//

    const keyPressed$ = fromEvent<KeyboardEvent>(document, "keydown");

    keyPressed$.subscribe(console.log);

    //------------Crear un Observable que emite teclas pulsadas-------------//
    //----------------------------------------------------------------------//

    //-----------------------------------------------------------------------//
    //----------Crear un Observable que emita cambios en el scroll-----------//

    const scroll$ = fromEvent<UIEvent>(document, "scroll");

    scroll$.subscribe((scroll) => console.log(scroll));

    //----------Crear un Observable que emita cambios en el scroll-----------//
    //-----------------------------------------------------------------------//

    //-----------------------------------------------------------------------//
    //--------Crear un Observable que emite cuando se copie un texto---------//

    const copie$ = fromEvent<ClipboardEvent>(document, "copy");

    copie$.subscribe(console.log);

    //--------Crear un Observable que emite cuando se copie un texto---------//
    //-----------------------------------------------------------------------//

    //--------------------------------------------------------//
    //--------Emitir los clicks que ocurran en el DOM---------//

    const clicks = fromEvent(document, "click");
    clicks.subscribe((x) => console.log(x));

    //--------Emitir los clicks que ocurran en el DOM---------//
    //--------------------------------------------------------//
  }

}

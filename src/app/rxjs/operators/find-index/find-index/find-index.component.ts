import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { findIndex, map } from 'rxjs/operators';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.css']
})
export class FindIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------------//
    //--Emitir el índice del primer lenguaje de tipo Multiparadigma--//

    const language$ = from([
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Rust", type: "Multiparadigma" },
    ]);
    
    language$
      .pipe(findIndex(({ type }) => type === "Multiparadigma"))
      .subscribe(console.log);

    //--Emitir el índice del primer lenguaje de tipo Multiparadigma--//
    //---------------------------------------------------------------//

    //-------------------------------------------------------------//
    //--Emite el índice de la primera vez que se pulse la tecla x--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        findIndex((code) => code === "KeyX")
      )
      .subscribe(console.log);

    //--Emite el índice de la primera vez que se pulse la tecla x--//
    //-------------------------------------------------------------//
  }

}

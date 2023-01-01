import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css']
})
export class TakeWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------//
    //--Emitir números mientras sean menores que 10--//

    const number$ = interval(1000);

    number$
      .pipe(takeWhile(number => number < 10))
      .subscribe(console.log, console.error, () => console.log("Completado")); // Salida: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, Completado

    //--Emitir números mientras sean menores que 10--//
    //-----------------------------------------------//

    //--------------------------------------------------------------//
    //--Emitir las teclas pulsadas mientras no se pulse la tecla x--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        takeWhile(({ code }) => code !== "KeyX"),
        map(({ code }) => code)
      )
      .subscribe(console.log, console.error, () => console.log("Completado"));
    // Salida: KeyP, KeyC, KeyM (Pulsar KeyX), Completado

    //--Emitir las teclas pulsadas mientras no se pulse la tecla x--//
    //--------------------------------------------------------------//

    //---------------------------------------------------------//
    //--Emitir lenguajes mientras sean de tipo Multiparadigma--//

    const language$ = from([
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Rust", type: "Multiparadigma" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Scala", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language$
      .pipe(takeWhile(({ type }) => type === "Multiparadigma"))
      .subscribe(console.log);
    // Salida: { name: "Ruby", type: "Multiparadigma" }, { name: "Rust", type: "Multiparadigma" }

    //--Emitir lenguajes mientras sean de tipo Multiparadigma--//
    //---------------------------------------------------------//

    //------------------------------------------------------------------------------------------------------------------------------------------------//
    //--Si se proporciona el valor true como segundo argumento (parámetro inclusive), el primer elemento que no cumpla la condición también se emite--//

    const programmingLanguage$ = from([
      { name: "Simula", type: "Object-oriented" },
      { name: "Java", type: "Object-oriented" },
      { name: "Wolfram", type: "Declarative" },
      { name: "Ruby", type: "Multiparadigm" },
    ]);
    
    // Si se proporciona el valor true como segundo argumento (parámetro inclusive), el primer elemento que no cumpla la condición también se emite
    programmingLanguage$
      .pipe(takeWhile(({ type }) => type === "Object-oriented", true))
      .subscribe(console.log);
    // Salida: { name: "Simula", type: "Object-oriented" }, { name: "Java", type: "Object-oriented" }, { name: "Wolfram", type: "Declarative" }

    //--Si se proporciona el valor true como segundo argumento (parámetro inclusive), el primer elemento que no cumpla la condición también se emite--//
    //------------------------------------------------------------------------------------------------------------------------------------------------//
  }

}

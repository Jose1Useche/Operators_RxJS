import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.css']
})
export class SkipWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------------------------//
    //--Saltar la secuencia de números mientras sean menores que 3--//

    const number$ = interval(1000);

    number$.pipe(skipWhile(num => num < 3)).subscribe(console.log); // Salida: 3, 4, 5, 6, 7...

    //--Saltar la secuencia de números mientras sean menores que 3--//
    //--------------------------------------------------------------//

    //---------------------------------------------------------------------//
    //--Si la condición comienza siendo falsa, no se saltará ningún valor--//

    const number2$ = interval(1000);

    number2$.pipe(skipWhile((num) => num > 3)).subscribe(console.log); // Salida: 0, 1, 2, 3, 4, 5, 6, 7...

    /*La condición no se cumple cuando el Observable comienza a emitir (los números emitidos no son mayores que 3), por lo que, aunque más adelante sí que se cumpla (cuando los números emitidos sean mayores que 3), no se saltará ningún valor. Esto es debido a que la condición nunca vuelve a evaluarse tras devolver false.*/

    //--Si la condición comienza siendo falsa, no se saltará ningún valor--//
    //---------------------------------------------------------------------//

    //-------------------------------------------------------------//
    //--Saltar los lenguajes mientras sean de tipo Multiparadigma--//

    const language$ = from([
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Rust", type: "Multiparadigma" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Scala", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language$
      .pipe(skipWhile(({ type }) => type === "Multiparadigma"))
      .subscribe(console.log);
    /* Salida:
      { name: "Java", type: "Orientado a objetos" },
      { name: "Scala", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
    */

    //--Saltar los lenguajes mientras sean de tipo Multiparadigma--//
    //-------------------------------------------------------------//
  }

}

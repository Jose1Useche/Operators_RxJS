import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-group-by',
  templateUrl: './group-by.component.html',
  styleUrls: ['./group-by.component.css']
})
export class GroupByComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------------------------------------------------------------//
    //--Agrupar lenguajes de programación según su tipo, y emitir el GroupedObservable resultante en forma de array--//

    const language$ = from([
      { name: "Rust", type: "Multiparadigma" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Scala", type: "Multiparadigma" },
      { name: "Simula", type: "Orientado a objetos" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language$
      .pipe(
        groupBy(({ type }) => type),
        mergeMap((group$) => group$.pipe(toArray()))
      )
      .subscribe(console.log);
    /* Salida: 
    [{ name: "Rust", type: "Multiparadigma" }, { name: "Scala", type: "Multiparadigma" }],
    [{ name: "Java", type: "Orientado a objetos" }, { name: "Simula", type: "Orientado a objetos" }],
    [{ name: "Haskell", type: "Funcional" }]
    */

    //--Agrupar lenguajes de programación según su tipo, y emitir el GroupedObservable resultante en forma de array--//
    //---------------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------------------------------------------------------------------//
    //--Agrupar lenguajes de programación según su tipo, seleccionar únicamente el nombre y emitir el GroupedObservable resultante en forma de array--//

    const language2$ = from([
      { name: "Rust", type: "Multiparadigma" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Scala", type: "Multiparadigma" },
      { name: "Simula", type: "Orientado a objetos" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language2$
      .pipe(
        groupBy(
          ({ type }) => type,
          ({ name }) => name
        ),
        mergeMap((group$) => group$.pipe(toArray()))
      )
      .subscribe(console.log);
    /* Salida:
      ["Rust", "Scala"],
      ["Java", "Simula"],,
      ["Haskell"]
    */

    //--Agrupar lenguajes de programación según su tipo, seleccionar únicamente el nombre y emitir el GroupedObservable resultante en forma de array--//
    //------------------------------------------------------------------------------------------------------------------------------------------------//
  }

}

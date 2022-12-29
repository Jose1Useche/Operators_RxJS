import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------//
    //--Emitir los números mayores que 5--//

    const number$ = range(1, 10);

    number$.pipe(filter((n) => n > 5)).subscribe(console.log); // Salida: 6, 7, 8, 9, 10

    //--Emitir los números mayores que 5--//
    //------------------------------------//

    //---------------------------------------------------------//
    //--Emitir todas las teclas, excepto la barra espaciadora--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        filter(code => code !== "Space")
      )
      .subscribe(console.log);

    //--Emitir todas las teclas, excepto la barra espaciadora--//
    //---------------------------------------------------------//

    //------------------------------------------------//
    //--Filtrar los lenguages de tipo Multiparadigma--//

    const language$ = from([
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Rust", type: "Multiparadigma" },
    ]);
    
    language$
      .pipe(filter(({ type }) => type !== "Multiparadigma"))
      .subscribe(console.log);
    /* Salida: 
    { name: "Java", type: "Orientado a objetos" },
    { name: "Haskell", type: "Funcional" }
    */

    //--Filtrar los lenguages de tipo Multiparadigma--//
    //------------------------------------------------//

    //----------------------------------------------------------------//
    //--Emite solo los eventos click cuyo target sea un elemento DIV--//

    const clicks = fromEvent(document, "click");
    const clicksOnDivs = clicks.pipe(filter((ev: any) => ev.target.tagName === "DIV"));
    clicksOnDivs.subscribe((x) => console.log(x));

    //--Emite solo los eventos click cuyo target sea un elemento DIV--//
    //----------------------------------------------------------------//
  }

}

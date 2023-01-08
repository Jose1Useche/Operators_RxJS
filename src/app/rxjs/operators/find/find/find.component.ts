import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------------------------//
    //--Emite la primera vez que se presiona la tecla X, y se completa el flujo--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$.pipe(find(({ code }) => code === "KeyX")).subscribe(console.log); // Salida: KeyboardEvent {}

    //--Emite la primera vez que se presiona la tecla X, y se completa el flujo--//
    //---------------------------------------------------------------------------//

    //----------------------------------------------------//
    //--Emitir el primer lenguaje de tipo Multiparadigma--//

    const language$ = from([
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Rust", type: "Multiparadigma" },
    ]);
    
    language$
      .pipe(find(({ type }) => type === "Multiparadigma"))
      .subscribe(console.log);

    //--Emitir el primer lenguaje de tipo Multiparadigma--//
    //----------------------------------------------------//

    //--------------------------------------------------------------//
    //--Si ningún elemento cumple la condición, se emite undefined--//

    const user$ = from([
      { name: "Nya", language: "TS" },
      { name: "Juan", language: "JS" },
      { name: "Carlos", language: "Java" },
    ]);
    
    user$
      .pipe(find(({ language }) => language === "PHP"))
      .subscribe(console.log, console.error, () =>
        console.log("¡Flujo completado!")
      ); // Salida: undefined, ¡Flujo completado!

    //--Si ningún elemento cumple la condición, se emite undefined--//
    //--------------------------------------------------------------//

    //-------------------------------------------------------------------//
    //--Encuentra y emite el primer click que ocurra en un elemento DIV--//

    const clicks = fromEvent(document, "click");
    const result = clicks.pipe(find((ev: any) => ev.target.tagName === "DIV"));
    result.subscribe((x) => console.log(x));

    //--Encuentra y emite el primer click que ocurra en un elemento DIV--//
    //-------------------------------------------------------------------//
  }

}

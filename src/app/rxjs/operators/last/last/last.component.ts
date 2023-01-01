import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------//
    //--Emitir la última cadena de una secuencia--//

    const fruit$ = from(["Cereza", "Fresa", "Arándano"]);

    fruit$.pipe(last()).subscribe(console.log); // Salida: Arándano

    //--Emitir la última cadena de una secuencia--//
    //--------------------------------------------//

    //------------------------------------------------------//
    //--Emitir el último elemento que cumpla una condición--//

    const user$ = of(
      { name: "NyaGarcía", age: 23 },
      { name: "zaldih", age: 21 },
      { name: "caballerog", age: 35 },
      { name: "carla.1003", age: 21 }
    );
    
    user$.pipe(last(({ age }) => age === 21)).subscribe(console.log); // Salida: { name: 'carla.1003', age: 21 }

    //--Emitir el último elemento que cumpla una condición--//
    //------------------------------------------------------//

    //----------------------------------------------------------------------------------------------//
    //--Proporcionar un valor por defecto, que será emitido si ningún elemento cumple la condición--//

    const language$ = from([
      { name: "Haskell", type: "Funcional" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Rust", type: "Multiparadigma" },
    ]);
    
    language$
      .pipe(
        last(({ type }) => type === "Orientado a objetos", {
          name: "Java",
          type: "Orientado a objetos",
        })
      )
      .subscribe(console.log);
    // Salida: { name: "Java", type: "Orientado a objetos" }

    //--Proporcionar un valor por defecto, que será emitido si ningún elemento cumple la condición--//
    //----------------------------------------------------------------------------------------------//
  }

}

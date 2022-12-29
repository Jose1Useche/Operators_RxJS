import { Component, OnInit } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------//
    //--Emitir la primera cadena de una secuencia--//

    const fruit$ = from(["Cereza", "Fresa", "Arándano"]);

    fruit$.pipe(first()).subscribe(console.log); // Salida: Cereza

    //--Emitir la primera cadena de una secuencia--//
    //---------------------------------------------//

    //-----------------------------------//
    //--Emitir la primera tecla pulsada--//

    const keyPressed$ = fromEvent<KeyboardEvent>(document, "keydown");

    keyPressed$
      .pipe(
        first(),
        map(({ code }) => code)
      )
      .subscribe(console.log);

    //--Emitir la primera tecla pulsada--//
    //-----------------------------------//

    //------------------------------------------------------//
    //--Emitir el primer elemento que cumpla una condición--//

    const user$ = of(
      { name: "NyaGarcía", age: 23 },
      { name: "zaldih", age: 21 },
      { name: "caballerog", age: 35 }
    );
    
    user$.pipe(first(({ age }) => age === 21)).subscribe(console.log);
    // Salida: { name: 'zaldih', age: 21 }

    //--Emitir el primer elemento que cumpla una condición--//
    //------------------------------------------------------//

    //----------------------------------------------------------------------------------------------//
    //--Proporcionar un valor por defecto, que será emitido si ningún elemento cumple la condición--//

    const nombres$ = from(['José','Nohemi','María','Juan']);
    
    nombres$
      .pipe(
        first(n => n === "Maria", 'Olga')) //tambien puede ser un onjeto JS por defecto
      .subscribe(console.log);

    //--Proporcionar un valor por defecto, que será emitido si ningún elemento cumple la condición--//
    //----------------------------------------------------------------------------------------------//
  }

}

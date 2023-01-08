import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, every } from 'rxjs/operators';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.css']
})
export class EveryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------//
    //--Comprobar si todos los valores emitidos son numéricos--//

    const number$ = of(1, 2, 3, 4);

    number$.pipe(every(n => Number.isInteger(n))).subscribe(console.log); // Salida: true

    //--Comprobar si todos los valores emitidos son numéricos--//
    //---------------------------------------------------------//

    //-----------------------------------------------------------//
    //--Comprobar si todos los valores emitidos son menores a 2--//

    const number2$ = of(1, 2, 3, 4);

    number2$.pipe(every((n) => n < 2)).subscribe(console.log); // Salida: false

    //--Comprobar si todos los valores emitidos son menores a 2--//
    //-----------------------------------------------------------//

    //--------------------------------------------------------------------//
    //--Comprobar si todas las peticiones tienen un status 200 (todo OK)--//

    const pokemonId$ = of(1, 5, 6);

    function getPokemon(id: number) {
      return ajax(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    pokemonId$
      .pipe(
        concatMap((id) => getPokemon(id)),
        every(({ status }) => status === 200)
      )
      .subscribe(console.log); // Salida: true

    //--Comprobar si todas las peticiones tienen un status 200 (todo OK)--//
    //--------------------------------------------------------------------//
  }

}

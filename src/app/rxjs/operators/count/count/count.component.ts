import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of, range } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, count, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------//
    //--Contar el número de emisiones--//

    const number$ = range(1, 4);

    // Contar el número de emisiones
    number$.pipe(count()).subscribe(console.log); // Salida: 4

    //--Contar el número de emisiones--//
    //---------------------------------//

    //-----------------------------------------------------//
    //--Contar el número de teclas pulsadas en 5 segundos--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      takeUntil(interval(5000))
    );
    
    key$.pipe(count()).subscribe(console.log);
    // Salida: (pulsar 5 teclas) 5

    //--Contar el número de teclas pulsadas en 5 segundos--//
    //-----------------------------------------------------//

    //----------------------------------------------//
    //--Contar las peticiones realizadas con éxito--//

    const pokemonId$ = of(1, 5, 3);

    function getPokemon(id: number) {
      return ajax(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
    
    // Contar las peticiones realizadas con éxito
    pokemonId$
      .pipe(
        concatMap((id) => getPokemon(id)),
        count(({ status }) => status === 200)
      )
      .subscribe(console.log); // Salida: 3

    //--Contar las peticiones realizadas con éxito--//
    //----------------------------------------------//
  }

}

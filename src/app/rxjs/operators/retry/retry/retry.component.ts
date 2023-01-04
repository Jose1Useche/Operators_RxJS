import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatMap, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------------------------//
    //--Reintentar una petición Ajax 3 veces en el caso de que haya algún error--//

    const pokemones$ = ajax.getJSON(`https://pokeapi.co/api/v2/pokemons`);

    pokemones$.pipe(retry(3)).subscribe(console.log, console.error); // Salida: (error) Error: ajax error 404

    //--Reintentar una petición Ajax 3 veces en el caso de que haya algún error--//
    //---------------------------------------------------------------------------//

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------//
    //--Utilizar retry junto a catchError para que, en el caso de que los tres reintentos de la petición Ajax fallen, el flujo continúe en lugar de acabar en error--//

    const pokemonId$ = of(-3, 5, 6);

    function getPokemonName(id: number) {
      return ajax.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
        map(({ name }) => name),
        // Se reintentará 3 veces si ocurre un error
        retry(3),
        // En el caso de que los 3 reintentos fallen, se usa catchError para que el flujo continúe
        catchError((error) =>
          of(`Reintentado 3 veces, pero ha ocurrido un error: ${error.message}`)
        )
      );
    }

    pokemonId$
      .pipe(concatMap((id) => getPokemonName(id)))
      .subscribe(console.log, console.error, () => console.log("¡Completado!"));
    /* Salida:
    'Reintentado 3 veces, pero ha ocurrido un error: ajax error 404',
    'charmeleon', 
    'charizard', 
    '¡Completado!' 
    */

    //--Utilizar retry junto a catchError para que, en el caso de que los tres reintentos de la petición Ajax fallen, el flujo continúe en lugar de acabar en error--//
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------//
  }

}

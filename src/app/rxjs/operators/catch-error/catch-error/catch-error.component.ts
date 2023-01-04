import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------//
    //--Capturar un error, retornando un Observable--//

    const error$ = throwError("¡Oh no!");

    error$
      .pipe(catchError((error) => of(`Error capturado grácilmente: ${error}`)))
      .subscribe(console.log); // Salida: Error capturado grácilmente: ¡Oh no!

    //--Capturar un error, retornando un Observable--//
    //-----------------------------------------------//

    //-----------------------------------------//
    //--Capturar un error y lanzar otro error--//

    const error2$ = throwError("Oh no!");

    error2$
      .pipe(
        catchError((error) => {
          throw `Lanzando un nuevo error: ${error}`;
        })
      )
      .subscribe(console.log, console.error); // Salida: (Error) Lanzando un nuevo error: Oh no!

    //--Capturar un error y lanzar otro error--//
    //-----------------------------------------//

    //-------------------------------------------------//
    //--Capturar los errores de un Observable interno--//

    /*Al capturar los errores que ocurren en un Observable interno (un Observable emitido por un Observable de orden superior), se debe tener cuidado a la hora de 
      utilizar el operador catchError ya que, si se coloca en el sitio equivocado, el flujo del Observable fuente no seguirá ejecutándose tras capturar el error.

      A continuación, se puede ver cómo el uso incorrecto de catchError hará que, después de capturar el error que devuelve la primera petición, el flujo se completará 
      y no se harán las otras dos peticiones restantes:*/

      const pokemonId$ = of(-3, 5, 6);

      function getPokemonName(id: number) {
        return ajax
          .getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .pipe(map(({ name }) => name));
      }

      pokemonId$
        .pipe(
          concatMap((id) => getPokemonName(id)),
          catchError((error) => of(`¡Oh no, ha ocurrido un error! ${error}`))
        )
        .subscribe(console.log, console.error, () => console.log("Completado")); // Salida: ¡Oh no, ha ocurrido un error! AjaxError: ajax error 404, Completado

        /*Sin embargo, si se utiliza catchError en el Observable interno, el comportamiento es el que se busca: cuando falle la primera petición, se capturará el error 
          y el flujo seguirá ejecutándose, realizando las dos peticiones restantes:*/

      const pokemonId2$ = of(-3, 5, 6);

      function getPokemonName2(id: number) {
        return ajax
          .getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .pipe(map(({ name }) => name));
      }
      
      pokemonId2$
        .pipe(
          concatMap((id) =>
            getPokemonName2(id).pipe(catchError((error) => of(`¡Oh no! ${error}`)))
          )
        )
        .subscribe(console.log, console.error, () => console.log("Completado"));

    //--Capturar los errores de un Observable interno--//
    //-------------------------------------------------//
  }

}

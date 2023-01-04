import { Component, OnInit } from '@angular/core';
import { interval, merge, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, map, mergeAll } from 'rxjs/operators';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styleUrls: ['./merge-all.component.css']
})
export class MergeAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------//
    //--Comparacion entre merge y mergeAll--//

    // const contador1 = interval(1000).pipe(map(v => 'Valor de contador1: ' + v));
    // const contador2 = interval(2000).pipe(map(v => 'Valor de contador2: ' + v));

    // // merge(contador1, contador2).subscribe(console.log);

    // contador1.pipe(
    //   map(() => contador2),
    //   mergeAll()
    //   ).subscribe(console.log);

    //--Comparacion entre merge y mergeAll--//
    //--------------------------------------//

    //-------------------------------------------------------------------------//
    //--Realizar todas las peticiones AJAX de forma concurrente (en paralelo)--//

    const pokemonId$ = of(1, 5, 6);

    function getPokemonName(id: number) {
      return ajax.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
        map(({ name }) => name),
        delay(2000)
      );
    }

    pokemonId$
      .pipe(
        map((id) => getPokemonName(id)),
        mergeAll()
      )
      .subscribe(console.log); // Salida: (2s) bulbasaur, charmeleon, charizard

    //--Realizar todas las peticiones AJAX de forma concurrente (en paralelo)--//
    //-------------------------------------------------------------------------//

    //----------------------------------------------------------------//
    //--Realizar como mucho dos peticiones AJAX de forma concurrente--//

    const pokemonId2$ = of(1, 5, 6);

    function getPokemonName2(id: number) {
      return ajax.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
        map(({ name }) => name),
        delay(2000)
      );
    }
    
    const maxConcurrent = 2;
    
    pokemonId2$
      .pipe(
        map((id) => getPokemonName2(id)),
        mergeAll(maxConcurrent)
      )
      .subscribe(console.log); // Salida: (2s) bulbasaur, charmeleon (2s) charizard

    //--Realizar como mucho dos peticiones AJAX de forma concurrente--//
    //----------------------------------------------------------------//
  }

}

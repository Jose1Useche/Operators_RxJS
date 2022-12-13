import { Component, OnInit } from '@angular/core';
import { interval, of, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, delayWhen, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  test: any;

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------------------------------------------------//
    //--Realizar varias peticiones AJAX de forma secuencial. Hasta que cada petición no termine, no se realizará la siguiente--//
    
    const pokemonId$ = of(1, 5, 6);

    function getPokemonName(id: number) {
      return ajax
        .getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .pipe(map(({ name }) => name)); //.pipe(map((p: any) => p.name)); Con las llaves ({}) nos referimos directamente a una de las propiedades del objeto
    }

    pokemonId$.pipe(concatMap(id => getPokemonName(id))).subscribe(console.log); // Salida: bulbasaur, charmeleon, charizard

    //--Realizar varias peticiones AJAX de forma secuencial. Hasta que cada petición no termine, no se realizará la siguiente--//
    //-------------------------------------------------------------------------------------------------------------------------//

    //------------------------------------------//
    //--Comparación entre mergeMap y concatMap--//

    const pokemonId2$ = of(1, 5, 6);

    function getRandomNumber() {
      return Math.floor(Math.random() * 5) + 1;
    }

    function getPokemonName2(id: number) {
      return ajax.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
        map(({ name }) => name),
        // El resultado de cada petición se retrasará por un periodo aleatorio de tiempo. Esto se hace para poder observar que, al utilizar mergeMap, 
        //los resultados de las peticiones se emitirán en un orden aleatorio
        delayWhen((_) => interval(getRandomNumber() * 1000))
      );
    }

    pokemonId2$.pipe(concatMap((id) => getPokemonName2(id))).subscribe(p => console.log('concatMap: ', p));// Salida: bulbasaur, charmeleon, charizard

    // Con mergeMap, el orden de los resultados será aleatorio
    pokemonId2$.pipe(mergeMap((id) => getPokemonName2(id))).subscribe(p => console.log('mergeMap: ', p));// Salida aleatoria

    //--Comparación entre mergeMap y concatMap--//
    //------------------------------------------//
  }


}

import { Component, OnInit } from '@angular/core';
import { interval, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delayWhen, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------------------------------------------------------------//
    //-----------------------------------------------Ejemplo-----------------------------------------------//

    function getRandomNumber() {
      return Math.floor(Math.random() * 100) + 20;
    }
    
    const pokemonId$ = of(1, 4, 7);
    
    function getPokemonName(id: number) {
      return ajax.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
        map(({ name, id }) => ({ name, id })),
        // Añadimos un retardo aleatorio a cada petición, para poder observar el efecto de mergeMap
        delayWhen((_) => interval(getRandomNumber() * 100))
      );
    }
    
    pokemonId$
      .pipe(
        tap((number) => console.log(`Obteniendo Pokémon con id: ${number}`)),
        mergeMap((number) => getPokemonName(number))
      )
      .subscribe(console.log);
    /* Output: 
        Obteniendo Pokémon con id: 1, 
        Obteniendo Pokémon con id: 4, 
        Obteniendo Pokémon con id: 7,
        { name: "Squirtle", id: 7 },
        { name: "Bulbasaur", id: 1 },
        { name: "Charmander", id: 4 }
    */

   //-----------------------------------------------Ejemplo-----------------------------------------------//
    //-----------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------//
    //--Proyectar y 'aplastar' cada letra a un Observable que emite cada segundo--//

    const letters = of("a", "b", "c");
    
    letters.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x + i)))
    ).subscribe(console.log);
    
    // Salida:
    // a0
    // b0
    // c0
    // a1
    // b1
    // c1
    // continúa listando a,b,c con un el número ascendiente que corresponda

    //--Proyectar y 'aplastar' cada letra a un Observable que emite cada segundo--//
    //----------------------------------------------------------------------------//
  }

}

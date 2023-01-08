import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------------------------------//
    //--Hacer un console.log para ver el antes y el después de una operación map--//

    const fruit$ = of("Cereza", "Fresa", "Arándano");

    fruit$
      .pipe(
        tap(fruit => console.log(`Antes: ${fruit}`)),
        map(fruit => fruit.toUpperCase()),
        tap(fruit => console.log(`Después: ${fruit}`))
      )
      .subscribe();

    /* Salida:
    Antes: Cereza, Después: CEREZA,
    Antes: Fresa, Después: FRESA,
    Antes: Arándano, Después: ARÁNDANO
    */

    //--Hacer un console.log para ver el antes y el después de una operación map--//
    //----------------------------------------------------------------------------//

    //--------------------------------------------------------------------//
    //--Actualizar una variable externa con la respuesta de una petición--//

    const pokemonId$ = of(3, 5, 6);
    let pokedex = [];
    
    function getPokemonName(id: number) {
      return ajax.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
        tap(pokemonData => pokedex = [...pokedex, pokemonData]),
        map(({ name }) => name)
      );
    }
    
    pokemonId$.pipe(concatMap(id => getPokemonName(id)))
              .subscribe(console.log, 
                         console.error, 
                         () => { console.log(pokedex) }); // Output: venusaur, charmeleon, charizard, [{}, {}, {}]

    //--Actualizar una variable externa con la respuesta de una petición--//
    //--------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------------------//
    //--Proyecta cada click a su posición clientX, después de hacer un console.log del evento click completo--//

    const clicks = fromEvent<MouseEvent>(document, "click");
    const positions = clicks.pipe(
      tap(ev => console.log(ev)),
      map(ev => ev.clientX)
    );
    positions.subscribe((x) => console.log(x));

    //--Proyecta cada click a su posición clientX, después de hacer un console.log del evento click completo--//
    //--------------------------------------------------------------------------------------------------------//
  }

}

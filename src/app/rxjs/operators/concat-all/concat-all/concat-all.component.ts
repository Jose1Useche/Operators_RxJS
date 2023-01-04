import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatAll, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.css']
})
export class ConcatAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------------------------------------------------------------------//
    //--concatAll se suscribe a cada Observable interno si, y solo si, el Observable interno anterior se ha completado--//
    //-------------Esto implica que espera a que cada petición esté terminada antes de hacer una nueva-------------//

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
        concatAll()
      )
      .subscribe(console.log); // Salida: (2s) bulbasaur, (2s) charmeleon, (2s) charizard

    //--concatAll se suscribe a cada Observable interno si, y solo si, el Observable interno anterior se ha completado--//
    //-------------Esto implica que espera a que cada petición esté terminada antes de hacer una nueva-------------//
    //------------------------------------------------------------------------------------------------------------------//
  }

}

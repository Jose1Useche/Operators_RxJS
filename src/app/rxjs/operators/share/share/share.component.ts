import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, mergeAll, share, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  //----------------------------------------------------------------------------------------------------------------------------------//
  /*--Por defecto, los Observables son fríos. Esto quiere decir que con cada suscripción, se vuelve a crear el productor subyacente.-- 
    --Por tanto, si un Observable realiza una petición AJAX, cada vez que reciba una suscripción nueva, volverá a hacer la petición.-- 
                              --Este comportamiento se puede observar en el siguiente ejemplo:--*/

    const pokemones = ajax.getJSON("https://pokeapi.co/api/v2/pokemon/17").pipe(
      tap(() => console.log("Nueva petición")));

    const nombrePokemon$ = pokemones.pipe(map(({ name }) => 'Mi pokemon es: ' + name));

    const habilidadPokemon$ = pokemones.pipe(
      map(({ abilities }) => 'su habilidad es: ' + abilities[0].ability.name)
    );

    nombrePokemon$.subscribe(console.log);
    habilidadPokemon$.subscribe(console.log);

    /* Salida: 
    'Nueva petición'
    'pidgeotto',
    'Nueva petición',
    'keen-eye'
    */

  /*--Por defecto, los Observables son fríos. Esto quiere decir que con cada suscripción, se vuelve a crear el productor subyacente.-- 
    --Por tanto, si un Observable realiza una petición AJAX, cada vez que reciba una suscripción nueva, volverá a hacer la petición.-- 
                              --Este comportamiento se puede observar en el siguiente ejemplo:--*/
  //----------------------------------------------------------------------------------------------------------------------------------//

  //-------------------------------------------------------------------------------------------------------------------------------------//
  /*--Sin embargo, si se utiliza el operador share para multidifundir (compartir) los valores del Observable entre todos sus suscriptores. 
      De esta manera, el Observable frío se convierte en uno caliente, y, en el caso del ejemplo anterior, 
      la petición AJAX no se repite con cada nueva suscripción.*/

      const pokemones2 = ajax.getJSON("https://pokeapi.co/api/v2/pokemon/17").pipe(
        tap(() => console.log("SHARE ==> Nueva petición")),
        share()
      );

      const nombrePokemon2$ = pokemones2.pipe(map(({ name }) => 'SHARE ==> Mi pokemon es: ' + name));

      const habilidadPokemon2$ = pokemones2.pipe(
        map(({ abilities }) => 'SHARE ==> su habilidad es: ' + abilities[0].ability.name)
      );

      nombrePokemon2$.subscribe(console.log);
      habilidadPokemon2$.subscribe(console.log);

      /* Salida: 
    'SHARE ==> Nueva petición'
    'pidgeotto',
    'keen-eye'
    */

  //-------------------------------------------------------------------------------------------------------------------------------------//
  /*--Sin embargo, si se utiliza el operador share para multidifundir (compartir) los valores del Observable entre todos sus suscriptores. 
      De esta manera, el Observable frío se convierte en uno caliente, y, en el caso del ejemplo anterior, 
      la petición AJAX no se repite con cada nueva suscripción.*/
  }

}

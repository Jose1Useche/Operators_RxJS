import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, min } from 'rxjs/operators';

@Component({
  selector: 'app-min',
  templateUrl: './min.component.html',
  styleUrls: ['./min.component.css']
})
export class MinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------//
    //--Obtener el valor mínimo de una serie de números--//

    const number$ = of(4, 7, 2, 10, 8, 9);

    number$.pipe(min()).subscribe(console.log); // Salida: 2

    //--Obtener el valor mínimo de una serie de números--//
    //---------------------------------------------------//

    //------------------------------------------------------------------------//
    //--Utilizar una función de comparación para obtener la cadena más corta--//

    const fruit$ = of("Cereza", "Arándano", "Fresa");

    // Utilizar una función de comparación para obtener la cadena más corta
    fruit$.pipe(min((a, b) => a.length - b.length)).subscribe(console.log); // Salida: Fresa

    //--Utilizar una función de comparación para obtener la cadena más corta--//
    //------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------------//
    //--Utilizar una función de comparación para comparar objetos anidados y obtener el de menor valor--//

    const githubUser$ = of(
      { name: "zaldih", stats: { repositories: 23 } },
      { name: "NyaGarcia", stats: { repositories: 30 } },
      { name: "caballerog", stats: { repositories: 89 } },
      { name: "tonivj5", stats: { repositories: 51 } },
    );
    
    githubUser$
      .pipe(
        min((a, b) => a.stats.repositories - b.stats.repositories),
        map(({ name }) => name)
      )
      .subscribe(console.log); // Salida: caballerog

    //--Utilizar una función de comparación para comparar objetos anidados y obtener el de menor valor--//
    //--------------------------------------------------------------------------------------------------//
  }

}

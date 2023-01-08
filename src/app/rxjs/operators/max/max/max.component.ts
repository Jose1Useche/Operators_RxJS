import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, max } from 'rxjs/operators';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})
export class MaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------//
    //--Obtener el valor máximo de una serie de números--//

    const number$ = of(4, 7, 2, 10, 8, 9);

    number$.pipe(max()).subscribe(console.log); // Salida: 10

    //--Obtener el valor máximo de una serie de números--//
    //---------------------------------------------------//

    //------------------------------------------------------------------------//
    //--Utilizar una función de comparación para obtener la cadena más larga--//

    const fruit$ = of("Cereza", "Arándano", "Fresa");

    // Utilizar una función de comparación para obtener la cadena más larga
    fruit$.pipe(max((a, b) => a.length - b.length)).subscribe(console.log); // Salida: Arándano

    //--Utilizar una función de comparación para obtener la cadena más larga--//
    //------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------------//
    //--Utilizar una función de comparación para comparar objetos anidados y obtener el de mayor valor--//

    const githubUser$ = of(
      { name: "zaldih", stats: { repositories: 23 } },
      { name: "NyaGarcia", stats: { repositories: 30 } },
      { name: "caballerog", stats: { repositories: 89 } },
      { name: "tonivj5", stats: { repositories: 51 } },
    );
    
    githubUser$
      .pipe(
        max((a, b) => a.stats.repositories - b.stats.repositories),
        map(({ name }) => name)
      )
      .subscribe(console.log); // Salida: caballerog

    //--Utilizar una función de comparación para comparar objetos anidados y obtener el de mayor valor--//
    //--------------------------------------------------------------------------------------------------//

    //-------------------------------------------------------------------------------//
    //--Utilizar una función de comparación para obtener el elemento de mayor valor--//

    interface Person {
      age: number,
      name: string
    }
    of<Person>(
      {age: 7, name: 'Foo'},
      {age: 5, name: 'Bar'},
      {age: 9, name: 'Beer'},
    ).pipe(
      max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1),
    )
    .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'

    //--Utilizar una función de comparación para obtener el elemento de mayor valor--//
    //-------------------------------------------------------------------------------//
  }

}

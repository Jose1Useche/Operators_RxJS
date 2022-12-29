import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css']
})
export class DistinctUntilChangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------------//
    //--Usar distinctUntilChanged sin una función de comparación--//

    const fruit$ = of("Fresa", "Cereza", "Cereza", "Arándano", "Arándano", "Fresa");

    fruit$.pipe(distinctUntilChanged()).subscribe(console.log); // Salida: Fresa, Cereza, Arándano, Fresa

    //--Usar distinctUntilChanged sin una función de comparación--//
    //------------------------------------------------------------//

    //------------------------------------------------------------//
    //--Usar distinctUntilChanged con una función de comparación--//

    const language$ = of(
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Haskell", type: "Funcional" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" }
    );
    
    language$
      .pipe(
        distinctUntilChanged(
          ({ name: previousName }, { name }) => previousName === name
        )
      )
      .subscribe(console.log);
    /* Salida: 
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" }
    */

    //--Usar distinctUntilChanged con una función de comparación--//
    //------------------------------------------------------------//

    //------------------------------------------------//
    //--Un ejemplo usando una función de comparación--//

    interface Person {
      age: number,
      name: string
    }

    of<Person>(
        { age: 4, name: 'Foo'},
        { age: 7, name: 'Bar'},
        { age: 5, name: 'Foo'},
        { age: 6, name: 'Foo'},
      ).pipe(
        distinctUntilChanged((p: Person, q: Person) => p.name === q.name),
      )
      .subscribe(x => console.log(x));

    // displays:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo' }

    //------------------------------------------------//
    //--Un ejemplo usando una función de comparación--//
  }

}

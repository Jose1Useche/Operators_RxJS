import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { distinctUntilKeyChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.css']
})
export class DistinctUntilKeyChangedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------------------------------------------//
    //--Emitir solo cuando la tecla pulsada sea distinta a la tecla pulsada anterior--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      distinctUntilKeyChanged('code'),
      map(({ code }) => code)
    );
    
    key$.subscribe(console.log);

    //--Emitir solo cuando la tecla pulsada sea distinta a la tecla pulsada anterior--//
    //--------------------------------------------------------------------------------//

    //---------------------------------------------------------------------------------------//
    //--Emitir el objeto lenguaje si su propiedad name es distinta a la del objeto anterior--//

    const language$ = of(
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Haskell", type: "Funcional" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" }
    );
    
    language$.pipe(distinctUntilKeyChanged("name")).subscribe(console.log);
    /* Salida:
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" }
    */

    //--Emitir el objeto lenguaje si su propiedad name es distinta a la del objeto anterior--//
    //---------------------------------------------------------------------------------------//

    //---------------------------------------------------------------------------------------------//
    //--Utilizar una función de comparación para ignorar las diferencias de mayúsculas/minúsculas--//

    const user$ = of(
      { name: "NyaGarcía", age: 23 },
      { name: "nyagarcía", age: 23 },
      { name: "zaldih", age: 21 },
      { name: "caballerog", age: 35 },
      { name: "caballeroG", age: 35 }
    );
    
    user$
      .pipe(
        distinctUntilKeyChanged(
          "name",
          (prev, curr) => prev.toLowerCase() === curr.toLowerCase()
        )
      )
      .subscribe(console.log);
    /* Salida: 
      { name: 'NyaGarcía', age: 23 }, 
      { name: 'zaldih', age: 21} , 
      { name: 'caballerog', age: 35 }
    */

    //--Utilizar una función de comparación para ignorar las diferencias de mayúsculas/minúsculas--//
    //---------------------------------------------------------------------------------------------//

    //------------------------------------------------------------------//
    //--Un ejemplo comparando las primeras letras de la propiedad name--//

    interface Person {
      age: number;
      name: string;
    }
    
    of<Person>(
      { age: 4, name: "Foo1" },
      { age: 7, name: "Bar" },
      { age: 5, name: "Foo2" },
      { age: 6, name: "Foo3" }
    )
      .pipe(
        distinctUntilKeyChanged(
          "name",
          (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3)
        )
      )
      .subscribe((x) => console.log(x));
    
    // Salida:
    // { age: 4, name: 'Foo1' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo2' }

    //--Un ejemplo comparando las primeras letras de la propiedad name--//
    //------------------------------------------------------------------//
  }

}

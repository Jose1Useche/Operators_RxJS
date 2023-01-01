import { Component, OnInit } from '@angular/core';
import { from, of, range } from 'rxjs';
import { single } from 'rxjs/operators';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------//
    //--Emitir el único elemento que cumpla la condición--//

    const language$ = from([
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language$
      .pipe(single(({ type }) => type === "Multiparadigma"))
      .subscribe(console.log); // Salida: { name: "Ruby", type: "Multiparadigma" }

    //--Emitir el único elemento que cumpla la condición--//
    //----------------------------------------------------//

    //--------------------------------------------------------------------------//
    //--Si hay más de un elemento que cumpla la condición, se lanzará un error--//

    const number$ = range(1, 5);

    number$.pipe(single(n => n % 2 === 0)).subscribe(console.log, console.error);
    // Salida: (error) Sequence contains more than one element

    //--Si hay más de un elemento que cumpla la condición, se lanzará un error--//
    //--------------------------------------------------------------------------//

    //---------------------------------------------------------------------------//
    //--Si no hay ningún elemento que cumpla la condición, se emitirá undefined--//

    const user$ = of(
      { name: "NyaGarcía", age: 23 },
      { name: "zaldih", age: 21 },
      { name: "caballerog", age: 35 }
    );
    
    user$.pipe(single(({ age }) => age < 18)).subscribe(console.log); // Salida: undefined

    //--Si no hay ningún elemento que cumpla la condición, se emitirá undefined--//
    //---------------------------------------------------------------------------//
  }

}

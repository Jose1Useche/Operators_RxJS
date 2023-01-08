import { Component, OnInit } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.css']
})
export class IsEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------//
    //--Emite false para un Observable que no está vacío--//

    const word$ = of("No", "está", "vacío");

    word$.pipe(isEmpty()).subscribe(console.log); // Salida: false

    //--Emite false para un Observable que no está vacío--//
    //----------------------------------------------------//

    //--------------------------------------//
    //--Emite true para Observables vacíos--//

    const empty$ = EMPTY;
    const anotherEmpty$ = of();

    empty$.pipe(isEmpty()).subscribe(console.log); // Salida: true

    anotherEmpty$.pipe(isEmpty()).subscribe(console.log); // Salida: true

    //--Emite true para Observables vacíos--//
    //--------------------------------------//
  }

}

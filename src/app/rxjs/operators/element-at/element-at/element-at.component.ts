import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.css']
})
export class ElementAtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------//
    //--Emitir la segunda emisión del Observable fuente--//

    const fruit$ = of("Cereza", "Fresa", "Arándano");

    fruit$.pipe(elementAt(1)).subscribe(console.log); // Salida: Fresa

    //--Emitir la segunda emisión del Observable fuente--//
    //---------------------------------------------------//

    //---------------------------------------------------------------------------------------------------------------//
    //--Proporcionar un valor por defecto para que, si no se encuentra el índice especificado, no se lance un error--//

    const defaultFruit = "Mora";

    const fruit2$ = of("Cereza", "Fresa", "Arándano");

    // Proporcionar un valor por defecto para que, si no se encuentra el índice especificado, no se lance un error
    fruit2$.pipe(elementAt(5, defaultFruit)).subscribe(console.log, console.error);
    // Salida: Mora

    //--Proporcionar un valor por defecto para que, si no se encuentra el índice especificado, no se lance un error--//
    //---------------------------------------------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------//
    //--Si no se encuentra el índice y no se proporciona un valor por defecto, se lanza un error--//

    const fruit3$ = of("Cereza", "Fresa", "Arándano");

    // Si no se encuentra el índice y no se proporciona un valor por defecto, se lanza un error
    fruit3$.pipe(elementAt(5)).subscribe(console.log, console.error);
    // Salida: (error) Error: argument out of range

    //--Si no se encuentra el índice y no se proporciona un valor por defecto, se lanza un error--//
    //--------------------------------------------------------------------------------------------//
  }

}

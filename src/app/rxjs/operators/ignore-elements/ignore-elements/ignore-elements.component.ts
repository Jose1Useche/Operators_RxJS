import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-ignore-elements',
  templateUrl: './ignore-elements.component.html',
  styleUrls: ['./ignore-elements.component.css']
})
export class IgnoreElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------//
    //--Ignorar todos los valores del Observable fuente hasta que se complete--//

    const words$ = of("you", "talking", "to", "me");
    
    words$
      .pipe(ignoreElements())
      .subscribe(console.log, console.error, () => console.log("Palabras ignoradas :)")); // Salida: Haters ignorados :)

    //--Ignorar todos los valores del Observable fuente hasta que se complete--//
    //-------------------------------------------------------------------------//

    //------------------------------------//
    //--Si ocurre un error, será emitido--//

    const error$ = throwError("Ha ocurrido un error");

    error$
      .pipe(ignoreElements())
      .subscribe(console.log, console.error, () => console.log("Complete"));

    //--Si ocurre un error, será emitido--//
    //------------------------------------//
  }

}

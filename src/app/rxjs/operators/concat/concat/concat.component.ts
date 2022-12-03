import { Component, OnInit } from '@angular/core';
import { concat, from, interval, range, throwError } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------//
    //--------------------Concatenar varios Observables distintos--------------------//

    const number$ = range(1, 4);

    const fruit$ = from(["Fresa", "Cereza", "Arándano"]);

    const totoroFilmData$ = ajax.getJSON('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49');

    concat(number$, fruit$, totoroFilmData$).subscribe(console.log);
    // Salida: 1, 2, 3, 4, 'Fresa', 'Cereza', 'Arándano', { ..., title: 'My Neighbor Totoro', description: 'Two sisters move to the country...', ...}

    //--------------------Concatenar varios Observables distintos--------------------//
    //-------------------------------------------------------------------------------//

    //-------------------------------------------------------------------------------//
    //-----------------Concatenar el mismo Observable para repetirlo-----------------//

    const message$ = from(["RxJS mola"]);

    concat(message$, message$, message$).subscribe(console.log);
    // Salida: 'RxJS mola', 'RxJS mola', 'RxJS mola'

    //-----------------Concatenar el mismo Observable para repetirlo-----------------//
    //-------------------------------------------------------------------------------//

    //----------------------------------------------------------------------------------------------------------------------------------//
    //Si uno de los Observables de entrada nunca llega a completarse, concat nunca se suscribirá a los siguientes Observables de entrada//

    const infinite$ = interval(1000);
    const message2$ = from(["Nunca", "se", "emitirá"]);
    
    concat(infinite$, message2$).subscribe(console.log);
    // Salida: 0, 1, 2, 3...

    //Si uno de los Observables de entrada nunca llega a completarse, concat nunca se suscribirá a los siguientes Observables de entrada//
    //----------------------------------------------------------------------------------------------------------------------------------//

    //-----------------------------------------------------------------------------------------------------------------------------------------//
    //Si alguno de los Observables de entrada lanza un error, el Observable resultante lanzará un error inmediatamente, y el flujo se terminará//

    const message3$ = from(["Este mensaje se emitirá"]);
    const error$ = throwError("Oh no");
    const sadMessage$ = from(["No se llega a emitir :("]);
    
    concat(message3$, error$, sadMessage$).subscribe(console.log, console.error);
    // Salida: 'Este mensaje se emitirá', (error) Oh no

    //Si alguno de los Observables de entrada lanza un error, el Observable resultante lanzará un error inmediatamente, y el flujo se terminará//
    //-----------------------------------------------------------------------------------------------------------------------------------------//
  }

}

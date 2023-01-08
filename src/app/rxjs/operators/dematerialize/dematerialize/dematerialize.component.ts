import { Component, OnInit } from '@angular/core';
import { concat, of, throwError } from 'rxjs';
import { dematerialize, materialize } from 'rxjs/operators';

@Component({
  selector: 'app-dematerialize',
  templateUrl: './dematerialize.component.html',
  styleUrls: ['./dematerialize.component.css']
})
export class DematerializeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------------------------------------------------//
    //--Convierte las Notificaciones en emisiones con el mismo valor y tipo (error, next o complete)--//

    const notification$ = of("RxJS mola").pipe(materialize());
    const error = throwError('oh no!').pipe(materialize());
    const conjunto = concat(notification$, error);
    
    // Emitirá objetos Notification
    conjunto.subscribe(console.log);
    /* Salida: 
    Notification { kind: 'N', value: 'RxJS mola', error: undefined, ... }, 
    Notification { kind: 'C', value: 'undefined', error: undefined, ... }, 
    Notification { kind: 'E', value: undefined, error: {...}, ...}
    */
    
    // Al usar dematerialize, emitirá el valor de la notificación
    conjunto.pipe(dematerialize()).subscribe(console.log, console.error);
    // Salida: RxJS mola, (error) oh no!

    //--Convierte las Notificaciones en emisiones con el mismo valor y tipo (error, next o complete)--//
    //------------------------------------------------------------------------------------------------//
  }

}

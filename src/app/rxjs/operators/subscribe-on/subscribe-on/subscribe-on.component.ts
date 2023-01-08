import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, merge, of } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-subscribe-on',
  templateUrl: './subscribe-on.component.html',
  styleUrls: ['./subscribe-on.component.css']
})
export class SubscribeOnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------------//
    //--Comparación entre los distintos planificadores--//

    const async$ = of("asyncScheduler");
    const asap$ = of("asapScheduler");
    const immediate$ = of("Sin planificador");

    // Sin utilizar subscribeOn
    asap$.subscribe(console.log);
    async$.subscribe(console.log);
    immediate$.subscribe(console.log);
    // Salida: asapScheduler, asyncScheduler, Sin planificador

    // Utilizando subscribeOn
    asap$.pipe(subscribeOn(asapScheduler)).subscribe(console.log);
    async$.pipe(subscribeOn(asyncScheduler)).subscribe(console.log);
    immediate$.subscribe(console.log);
    // Salida: Sin planificador, asapScheduler, asyncScheduler

    //--Comparación entre los distintos planificadores--//
    //--------------------------------------------------//

    //---------------------------------------//
    //--Ejemplo de la documentación oficial--//

    const a = of(1, 2, 3, 4);
    const b = of(5, 6, 7, 8, 9);
    merge(a, b).subscribe(console.log);

    /*Tanto el Observable a como el Observable b emitirán sus valores de forma directa y síncrona cuando se realice alguna suscripción sobre ellos. 
      Esto resultará en la siguiente salida: 1, 2, 3, 4, 5, 6, 7, 8, 9

      Sin embargo, si se utiliza el operador subscribeOn para indicar que se quiere utilizar el asyncScheduler para los valores emitidos por el Observable a:*/

    const a2 = of(1, 2, 3, 4).pipe(subscribeOn(asyncScheduler));
    const b2 = of(5, 6, 7, 8, 9);
    merge(a2, b2).subscribe(console.log);

    /*La salida será 5, 6, 7, 8, 9, 1, 2, 3, 4. Esto es debido a que el Observable b emite sus valores de forma síncrona y directa, pero las emisiones del 
      Observable a se planifican en el bucle de eventos, dado que se está utilizando el asyncScheduler.*/

    //--Ejemplo de la documentación oficial--//
    //---------------------------------------//
  }

}

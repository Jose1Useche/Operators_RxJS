import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { delay, expand, mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.css']
})
export class ExpandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------------//
    //--Obtener los 3 números consecutivos a un número--//

    const number$ = of(1);

    number$
      .pipe(
        expand(val => of(val + 1)),
        take(4)
      )
      .subscribe(v => console.log('valor: ', v));
    // Salida: 1, 2, 3, 4

    //--Obtener los 3 números consecutivos a un número--//
    //--------------------------------------------------//

    //----------------------------------------------------------------------//
    //--Comienza a emitir como mucho diez potencias de dos, por cada click--//

    const clicks = fromEvent(document, "click");
    
    const powersOfTwo = clicks.pipe(
      mapTo(1),
      expand(x => of(2 * x).pipe(delay(1000))),
      take(10)
    );

    powersOfTwo.subscribe((x) => console.log(x));

    //--Comienza a emitir como mucho diez potencias de dos, por cada click--//
    //----------------------------------------------------------------------//
  }

}

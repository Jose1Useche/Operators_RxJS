import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { map, mergeScan, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-merge-scan',
  templateUrl: './merge-scan.component.html',
  styleUrls: ['./merge-scan.component.css']
})
export class MergeScanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------//
    //--Contar el número de teclas pulsadas--//

    const key$ = fromEvent(document, "keydown").pipe(map(x => 1));

    key$.pipe(mergeScan((acc, curr) => of(acc + curr), 0)).subscribe(console.log);
    // Salida: (Pulsar tecla) 1, (Pulsar tecla ) 2, (Pulsar tecla) 3...

    //--Contar el número de teclas pulsadas--//
    //---------------------------------------//

    //------------------------------------------------//
    //--Acumular el tiempo que esté pulsado el ratón--//

    const mouseDown$ = fromEvent(document, "mousedown");
    const mouseUp$ = fromEvent(document, "mouseup");

    mouseDown$
      .pipe(
        mergeScan(
          (acc) =>
            interval(1000).pipe(
              map((n) => acc + n),
              takeUntil(mouseUp$)
            ),
          0
        )
      )
      .subscribe(console.log, console.error);
    // Salida: (ratón pulsado 5s) 0, 1, 2, 3, 4 (ratón pulsado 2s) 4, 5, 6...

    //--Acumular el tiempo que esté pulsado el ratón--//
    //------------------------------------------------//

    //-------------------------------------//
    //--Contar el número de eventos click--//

    const click$ = fromEvent(document, "click");
    const one$ = click$.pipe(map(() => 1));
    const seed = 0;
    one$.pipe(mergeScan((acc, one) => of(acc + one), seed)).subscribe(console.log);
    
    // Salida: 1, 2, 3, 4... y así sucesivamente para cada click

    //--Contar el número de eventos click--//
    //-------------------------------------//
  }

}

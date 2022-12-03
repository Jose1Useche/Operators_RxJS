import { Component, OnInit } from '@angular/core';
import { concat, fromEvent, interval, merge, timer } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------//
    //Comparación entre concat y merge//

    const first$ = timer(3000).pipe(mapTo("Primero"));

    const second$ = timer(1000).pipe(mapTo("Segundo"));
    
    const third$ = timer(2000).pipe(mapTo("Tercero"));
    
    merge(first$, second$, third$).subscribe(console.log);// Salida: (1s) Segundo (1s) Tercero (1s) Primero
    
    concat(first$, second$, third$).subscribe(console.log);// Salida: (3s) Primero (1s) Segundo (2s) Tercero

    //Comparación entre concat y merge//
    //--------------------------------//

    //---------------------------------//
    //--------interval y clicks--------//

    const clicks = fromEvent(document, "click");
    const myTimer = interval(1000);
    
    const clicksOrTimer = merge(clicks, myTimer);
    
    clicksOrTimer.subscribe((x) => console.log(x));//timer emite valores ascendetntes, uno cada segundo (1000ms)
                                                   //clicks imprime MouseEvents por console cada vez que se haga click en el 'document'

    //--------interval y clicks--------//
    //---------------------------------//

    //-------------------------------------------------------------//
    //Unir 3 Observables, pero solo ejecutar 2 de forma concurrente//

    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));
    const concurrent = 2; // el argumento
    const merged = merge(timer1, timer2, timer3, concurrent);
    merged.subscribe((x) => console.log(x));

    // Salida:
    // - timer1 y timer2 se ejecutan concurrentemente
    // - timer1 emite un valor cada 1000ms durante 10 iterations
    // - timer2 emite un valor cada 2000ms durante 6 iterations
    // - Cuando timer1 llega a su max iteration, timer2 continuará
    //   y timer3 empezará a ejecutarse concurrentemente con timer2
    // - Cuando timer2 llega a su max iteration, se termina, y
    //   timer3 continuará emitiendo un valor cada 500ms hasta que se complete

    //Unir 3 Observables, pero solo ejecutar 2 de forma concurrente//
    //-------------------------------------------------------------//
  }

}

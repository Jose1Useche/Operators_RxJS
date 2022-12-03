import { Component, OnInit } from '@angular/core';
import { race, throwError, timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------//
    //Hacer una carrera con 3 Observables//

    const slow$ = timer(5000).pipe(mapTo("Caracol"));
    const medium$ = timer(3000).pipe(mapTo("Gatito"));
    const fast$ = timer(2000).pipe(mapTo("Guepardo"));

    race(slow$, medium$, fast$).subscribe((winner) => console.log(`Y el ganador es... ¡${winner}!`));// Salida: Y el ganador es... ¡Guepardo!

    //Hacer una carrera con 3 Observables//
    //-----------------------------------//

    //--------------------------------------------------------------------------------//
    //Si alguno de los Observables lanza un error, la 'carrera' terminará con un error//

    const slow2$ = timer(5000).pipe(mapTo("Caracol"));
    const medium2$ = timer(3000).pipe(mapTo("Gatito"));
    const fast2$ = timer(2000).pipe(mapTo("Guepardo"));

    const error$ = throwError("¡Oh no!");

    race(slow2$, medium2$, fast2$, error$).subscribe(console.log, console.error);

    //Si alguno de los Observables lanza un error, la 'carrera' terminará con un error//
    //--------------------------------------------------------------------------------//
  }

}

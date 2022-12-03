import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------//
    //---Emitir un único valor, 0, tras 2 segundos de espera---//

    const zero$ = timer(2000);

    zero$.subscribe(console.log);

    //---Emitir un único valor, 0, tras 2 segundos de espera---//
    //---------------------------------------------------------//

    //-----------------------------------------------------------------------------------------------------//
    //---Emitir una secuencia ascendente de números a intervalos de 1 segundo, tras 5 segundos de espera---//

    const number$ = timer(5000, 1000);

    number$.subscribe((number) => console.log(number));

    //---Emitir una secuencia ascendente de números a intervalos de 1 segundo, tras 5 segundos de espera---//
    //-----------------------------------------------------------------------------------------------------//

  }

}

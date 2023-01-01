import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------//
    //--Emitir las primeras 5 teclas pulsadas--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        map(({ code }) => code),
        take(5)
      )
      .subscribe(console.log); // Salida: KeyR, KeyX, KeyJ, KeyS, Space

    //--Emitir las primeras 5 teclas pulsadas--//
    //-----------------------------------------//
    
    //-------------------------------------------------------------------------------------------//
    //--Obtener los 5 primeros segundos de un Observable infinito de un intervalo de 1 segundo.--//

    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    takeFive.subscribe((x) => console.log(x)); // Salida: 0, 1, 2, 3, 4

    //--Obtener los 5 primeros segundos de un Observable infinito de un intervalo de 1 segundo.--//
    //-------------------------------------------------------------------------------------------//
  }

}

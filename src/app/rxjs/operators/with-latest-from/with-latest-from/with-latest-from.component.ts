import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css']
})
export class WithLatestFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------------------------------------------------------------//
    //--Combinar cada tecla pulsada con un Observable intervalo, para saber en qué momento se pulsa cada tecla--//

    const key$ =
      fromEvent<KeyboardEvent>(document, "keydown").pipe(map(({ code }) => code));

    const number$ = interval(1000);

    key$
      .pipe(
        withLatestFrom(number$),
        map(([code, time]) => `Tecla ${code} pulsada a los ${time} segundos`)
      )
      .subscribe((x) => console.log(x));

    //--Combinar cada tecla pulsada con un Observable intervalo, para saber en qué momento se pulsa cada tecla--//
    //----------------------------------------------------------------------------------------------------------//

    //---------------------------------------------------------------------------------------//
    //--Emitir un array con el temporizador más reciente más el evento click, en cada click--//

    const clicks = fromEvent(document, "click");
    const timer = interval(1000);
    clicks.pipe(withLatestFrom(timer)).subscribe(x => console.log(x));

    //--Emitir un array con el temporizador más reciente más el evento click, en cada click--//
    //---------------------------------------------------------------------------------------//
  }

}

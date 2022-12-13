import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.css']
})
export class BufferWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------//
    //--Almacenar valores durante periodos de 4 segundos--//

    const number$ = interval(1000);

    number$.pipe(bufferWhen(() => interval(4000))).subscribe(console.log); // Salida: [0, 1, 2], [3, 4, 5, 6], [7, 8, 9, 10]...

    //--Almacenar valores durante periodos de 4 segundos--//
    //----------------------------------------------------//

    //---------------------------------------------//
    //--Almacenar valores hasta que se haga click--//

    const number2$ = interval(1000);
    const click$ = fromEvent < MouseEvent > (document, "click");

    number2$.pipe(bufferWhen(() => click$)).subscribe(console.log); // Salida: (click ) [0, 1, 2, 3, 4] (click) [5, 6]...

    //--Almacenar valores hasta que se haga click--//
    //---------------------------------------------//
  }

}

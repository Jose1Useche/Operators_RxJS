import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------------------------------------//
    //--Almacenar valores en un array durante un periodo de 5 segundos y emitir el array--//

    const number$ = interval(1000);

    number$.pipe(bufferTime(5000)).subscribe(console.log);// Salida: [0, 1, 2, 3], [4, 5, 6, 7, 8]...

    //--Almacenar valores en un array durante un periodo de 5 segundos y emitir el array--//
    //------------------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------//
    //-------------------Cada segundo, emitir un array de eventos click-------------------//

    const clicks = fromEvent(document, "click");
    const buffered = clicks.pipe(bufferTime(1000));
    buffered.subscribe((x) => console.log(x));

    //-------------------Cada segundo, emitir un array de eventos click-------------------//
    //------------------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------//
    //-------Cada 5 segundos, emitir los eventos click de los siguientes 2 segundos-------//

    const clicks2 = fromEvent(document, "click");
    const buffered2 = clicks2.pipe(bufferTime(2000, 5000));
    buffered2.subscribe((x) => console.log(x));

    //-------Cada 5 segundos, emitir los eventos click de los siguientes 2 segundos-------//
    //------------------------------------------------------------------------------------//
  }

}

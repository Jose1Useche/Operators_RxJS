import { Component, OnInit } from '@angular/core';
import { fromEvent, range } from 'rxjs';
import { map, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------//
    //--Emitir un array que contenga los números del 1 al 5--//

    const number$ = range(1, 5);

    number$.pipe(toArray()).subscribe(console.log); // Salida: [ 1, 2, 3, 4, 5]

    //--Emitir un array que contenga los números del 1 al 5--//
    //-------------------------------------------------------//

    //---------------------------------------------------------------//
    //--Emitir un array que contenga las primeras 4 teclas pulsadas--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(
        take(4),
        map(({ code }) => code),
        toArray()
      )
      .subscribe(console.log);

    //--Emitir un array que contenga las primeras 4 teclas pulsadas--//
    //---------------------------------------------------------------//
  }

}

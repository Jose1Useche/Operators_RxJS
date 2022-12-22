import { Component, OnInit } from '@angular/core';
import { from, range } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------//
    //--Sumar una secuencia de números--//

    const number$ = range(1, 10);

    number$.pipe(scan((acc, val) => acc + val)).subscribe(console.log);// Salida: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55

    //--Sumar una secuencia de números--//
    //----------------------------------//

    //------------------------------------------------------------------//
    //--Sumar una secuencia de números proporcionando un valor inicial--//

    const number2$ = range(1, 10);

    number2$.pipe(scan((acc, val) => acc + val, 10)).subscribe(console.log);// Salida: 11, 13, 16, 20, 25, 31, 38, 46, 55, 65

    //--Sumar una secuencia de números proporcionando un valor inicial--//
    //------------------------------------------------------------------//

    //---------------------------------------//
    //--Concatenar una secuencia de cadenas--//

    const letter$ = from(["R", "x", "J", "S", " ", "m", "o", "l", "a"]);

    letter$.pipe(scan((acc, val) => acc + val)).subscribe(console.log);
    /*Salida: R
              Rx
              RxJ
              RxJS
              RxJS 
              RxJS m
              RxJS mo
              RxJS mol 
              RxJS mola
    */

    //--Concatenar una secuencia de cadenas--//
    //---------------------------------------//
  }

}

import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.css']
})
export class BufferCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    //---------------------------------------------------//
    //--Almacenar cada 5 valores en un array y emitirlo--//

    const number2$ = interval(1000);

    number2$.pipe(bufferCount(5)).subscribe(console.log);// Output: [0, 1, 2, 3, 4], [5, 6, 7, 8, 9]...

    //--Almacenar cada 5 valores en un array y emitirlo--//
    //---------------------------------------------------//

    //--------------------------------------------------------------------------------------------------------------------------------//
    //--Almacenar cada 3 valores en un array y emitirlo y genera un nuevo buffer cada 2 segundos para almacenar 3 valores siguientes--//

    const number$ = interval(1000);

    number$.pipe(bufferCount(3, 2)).subscribe(console.log);

    //--Almacenar cada 3 valores en un array y emitirlo y genera un nuevo buffer cada 2 segundos para almacenar 3 valores siguientes--//
    //--------------------------------------------------------------------------------------------------------------------------------//
  }

}

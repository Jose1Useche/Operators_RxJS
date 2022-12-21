import { Component, OnInit } from '@angular/core';
import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------//
    //--Multiplicar cada número por 2--//

    const number$ = range(1, 5);

    number$.pipe(map((number) => number * 2)).subscribe(console.log);// Salida: 2, 4, 6, 8, 10

    //--Multiplicar cada número por 2--//
    //---------------------------------//

    //---------------------------------------------------------//
    //--Emitir la propiedad code de cada objeto KeyboardEvent--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$.pipe(map(({ code }) => code)).subscribe(console.log); // Salida: El nombre de la tecla que se presione...

    //--Emitir la propiedad code de cada objeto KeyboardEvent--//
    //---------------------------------------------------------//

    //------------------------------------------------------------//
    //--Proyecta cada click a la posición clientX de dicho click--//

    const clicks = fromEvent(document, "click");
    const positions = clicks.pipe(map((ev: MouseEvent) => ev.clientX));
    positions.subscribe(x => console.log(x));

    //--Proyecta cada click a la posición clientX de dicho click--//
    //------------------------------------------------------------//
  }

}

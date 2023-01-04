import { Component, OnInit } from '@angular/core';
import { from, interval, of, range } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------//
    //--Proporcionar un valor inicial al flujo de emisiones--//

    const fruit$ = from(["Fresa", "Cereza"]);

    fruit$.pipe(startWith("Arándano")).subscribe(console.log); // Salida: Arándano, Fresa, Cereza

    //--Proporcionar un valor inicial al flujo de emisiones--//
    //-------------------------------------------------------//

    //--------------------------------------------------------//
    //--A startWith se le puede proporcionar más de un valor--//

    const number$ = range(0, 4);

    number$.pipe(startWith(-3, -2, -1)).subscribe(console.log); // Salida: -3, -2, -1, 0, 1, 2, 3

    //--A startWith se le puede proporcionar más de un valor--//
    //--------------------------------------------------------//

    //-------------------------------------------------------------//
    //--Comenzar la cadena de emisiones con 'primero' y 'segundo'--//

    of("Valores de la fuente")
      .pipe(startWith("Primero", "Segundo"))
      .subscribe((x) => console.log(x)); // Salida: "Primero", "Segundo", "Valores de la fuente"

    //--Comenzar la cadena de emisiones con 'primero' y 'segundo'--//
    //-------------------------------------------------------------//
  }

}

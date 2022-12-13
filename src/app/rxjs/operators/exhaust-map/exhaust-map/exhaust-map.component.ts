import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, exhaustMap, map, mergeAll, take } from 'rxjs/operators';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------------------//
    //--Ejecuta un temporizador con cada click, únicamente si no hay ningún temporizador activo--//

    const clicks = fromEvent(document, "click");
    const result = clicks.pipe(exhaustMap((ev) => interval(1000).pipe(take(5))));
    result.subscribe((x) => console.log(x));

    //--Ejecuta un temporizador con cada click, únicamente si no hay ningún temporizador activo--//
    //-------------------------------------------------------------------------------------------//

    //-------------------------------------------------------------------//
    //--Obtener 3 películas de Studio Ghibli al hacer click en el botón--//

    const click$ = fromEvent(document.getElementById("ghibliButton"), "click");

    function getGhibliFilms() {
      return ajax.getJSON("https://ghibliapi.herokuapp.com/films").pipe(
        delay(5000),
        mergeAll(),
        map(({ title }) => title),
        take(3)
      );
    }

    // Obtener 3 películas de Studio Ghibli al hacer click en el botón. Si hay alguna petición en curso, los clicks serán ignorados (cada petición tiene un retraso de 5s para poder observar este efecto.)
    click$.pipe(exhaustMap((_) => getGhibliFilms())).subscribe(console.log);
    // Salida: (Primer click) (click ignorado) (click ignorado) (5s) Castle in the Sky, Grave of the Fireflies, My Neighbor Totoro

    //--Obtener 3 películas de Studio Ghibli al hacer click en el botón--//
    //-------------------------------------------------------------------//
  }

}

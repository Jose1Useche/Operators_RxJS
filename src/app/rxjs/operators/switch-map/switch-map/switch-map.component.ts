import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, interval, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, mergeAll, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit, OnDestroy {

  mySubscription: Subscription;

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------------------------------------------------------//
    //--Cada vez que se pulsa el botón, se hace una nueva petición, cancelando la petición anterior--//

    // const click$ = fromEvent < MouseEvent > (document.getElementById("ghibliButton"), "click");

    // function getGhibliFilms() {
    //   return ajax
    //     .getJSON("https://ghibliapi.herokuapp.com/films")
    //     .pipe(mergeAll(), delay(2000));
    // }

    // click$.pipe(switchMap((_) => getGhibliFilms())).subscribe(console.log);
    // Salida: (Click) (Se hace nueva petición) (Click) (Se hace nueva petición)...

    //--Cada vez que se pulsa el botón, se hace una nueva petición, cancelando la petición anterior--//
    //-----------------------------------------------------------------------------------------------//

    //-------------------------------------------------------------------//
    //--Comenzar una nueva peticion en funcion a un intervalo de tiempo--//

    const obs1 = fromEvent(document.getElementById('ghibliButton'), 'click');
    const obs2 = interval(1000);

    // function contador() {
    //   return interval(1000); 
    // }

    // obs1.pipe(switchMap(() => contador())).subscribe(console.log);

    this.mySubscription = obs1.pipe(switchMap(() => obs2)).subscribe(console.log);

    //--Comenzar una nueva peticion en funcion a un intervalo de tiempo--//
    //-------------------------------------------------------------------//
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

}

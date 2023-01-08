import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, reduce, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------------//
    //--Contar el número de eventos click que ocurran en 5 segundos--//

    const clicksInFiveSeconds = fromEvent(document, "click").pipe(
      takeUntil(interval(5000))
    );
    const ones = clicksInFiveSeconds.pipe(map(cl => 1));
    const seed = 0;
    const count = ones.pipe(reduce((acc, one) => acc + one, seed));
    count.subscribe(console.log);

    //--Contar el número de eventos click que ocurran en 5 segundos--//
    //---------------------------------------------------------------//
  }

}

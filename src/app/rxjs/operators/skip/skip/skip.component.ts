import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------//
    //--Ignorar los primeros 5 clicks--//

    const click$ = fromEvent(document, "click");

    click$.pipe(skip(5)).subscribe(console.log);

    //--Ignorar los primeros 5 clicks--//
    //---------------------------------//

    //------------------------------//
    //--Ignorar el primer elemento--//

    const language$ = from([
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language$.pipe(skip(1)).subscribe(console.log);
    // Salida: { name: "Ruby", type: "Multiparadigma" }, { name: "Haskell", type: "Funcional" }

    //--Ignorar el primer elemento--//
    //------------------------------//
  }

}

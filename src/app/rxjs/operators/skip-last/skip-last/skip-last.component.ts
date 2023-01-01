import { Component, OnInit } from '@angular/core';
import { from, range } from 'rxjs';
import { skip, skipLast } from 'rxjs/operators';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.css']
})
export class SkipLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //--------------------------------//
    //--Saltar los últimos 5 números--//

    const number$ = range(1, 10);

    number$.pipe(skipLast(5)).subscribe(console.log); // Salida: 1, 2, 3, 4, 5

    //--Saltar los últimos 5 números--//
    //--------------------------------//

    //--------------------------//
    //--Saltar el último valor--//

    const language$ = from([
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
    ]);
    
    language$.pipe(skip(1)).subscribe(console.log);
    // Salida: { name: "Ruby", type: "Multiparadigma" }, { name: "Haskell", type: "Funcional" }

    //--Saltar el último valor--//
    //--------------------------//
  }

}

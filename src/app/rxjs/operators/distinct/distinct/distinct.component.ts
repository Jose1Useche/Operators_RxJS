import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css']
})
export class DistinctComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------//
    //--Usar distinct sin un selector--//

    const fruit$ = of("Fresa","Cereza","Cereza","Arándano","Fresa","Arándano","Cereza");
    
    fruit$.pipe(distinct()).subscribe(console.log); // Salida: Fresa, Cereza, Arándano

    //--Usar distinct sin un selector--//
    //---------------------------------//

    //--------------------------------------------------------//
    //--Usar distinct con un selector de clave (keySelector)--//

    const language$ = of(
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Ruby", type: "Multiparadigma" },
      { name: "Haskell", type: "Funcional" },
      { name: "Haskell", type: "Funcional" },
      { name: "Java", type: "Orientado a objetos" },
      { name: "Ruby", type: "Multiparadigma" }
    );
    
    language$.pipe(distinct(({ name }) => name)).subscribe(console.log);
    /* Salida: 
    { name: "Java", type: "Orientado a objetos" }, 
    { name: "Ruby", type: "Multiparadigma" }, 
    { name: "Haskell", type: "Funcional" }
    */

    //--Usar distinct con un selector de clave (keySelector)--//
    //--------------------------------------------------------//
  }

}

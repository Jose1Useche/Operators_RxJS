import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //------------------------------------------------------------------------------------------------------//
    //------------------------------Crear un Observable a partir de una cadena------------------------------//
    
    const letter$ = from('RxJS mola');

    letter$.subscribe(console.log);// Salida: 'R', 'x', 'J', 'S', ' ', 'm', 'o', 'l', 'a'

    //------------------------------Crear un Observable a partir de una cadena------------------------------//
    //------------------------------------------------------------------------------------------------------//

    //------------------------------------------------------------------------------------------------------//
    //-------------------------Crear un Observable a partir de un Array de cadenas--------------------------//
    
    const fruit$ = from(["Fresa", "Cereza", "Mora"]);

    fruit$.subscribe((fruit) => console.log(fruit));// Salida: Fresa, Cereza, Mora

    //-------------------------Crear un Observable a partir de un Array de cadenas--------------------------//
    //------------------------------------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------------------------------------------------//
    //------------------------------------------------Crear un Observable a partir de un Map------------------------------------------------//
     
    const language$ = from(
      new Map([
        ["Java", "Orientado a objetos"],
        ["Ruby", "Multiparadigma"],
        ["Haskell", "Funcional"],
      ])
    );

    language$.subscribe(console.log);// Salida: ["Java", "Orientado a objetos"], ["Ruby", "Multiparadigma"], ["Haskell", "Funcional"]

    //------------------------------------------------Crear un Observable a partir de un Map------------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------------------------------------------------//
    //----------------------------------------------Crear un Observable a partir de una promesa---------------------------------------------//
    
    const promise$ = from(Promise.resolve("Prometo empezar a aprender RxJS"));

    promise$.subscribe(console.log);// Salida: 'Prometo empezar a aprender RxJS'

    //----------------------------------------------Crear un Observable a partir de una promesa---------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------------------------------//

    //--------------------------------------------------------------------------------------------------------------------------------------//
    //----------------------------------------------Crear un Observable a partir de un NodeList---------------------------------------------//
    
    const node$ = from(document.querySelectorAll("p"));

    node$.subscribe((node) => console.log(node));// Salida: HTMLParagraphElement {tagName: "p", attributes: {...}}

    //----------------------------------------------Crear un Observable a partir de un NodeList---------------------------------------------//
    //--------------------------------------------------------------------------------------------------------------------------------------//
  }

}

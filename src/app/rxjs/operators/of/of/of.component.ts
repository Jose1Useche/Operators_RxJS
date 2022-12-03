import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, of, queueScheduler, scheduled } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------//
    //----------Emitir una secuencia de números----------//

    // const number$ = of(1, 2, 3, 4, 5);
    const number$ = scheduled([1, 2, 3], asyncScheduler	);

    number$.subscribe(n => console.log(n), e => null, () => console.log('Completed!'));
    
    //----------Emitir una secuencia de números----------//
    //---------------------------------------------------//

    //---------------------------------------------------//
    //----------Emitir una secuencia de cadenas----------//

    // const framework$ = of('Angular', 'React', 'Vue');
    const framework$ = scheduled(['Angular', 'React', 'Vue'], asapScheduler);

    framework$.subscribe(console.log);

    //----------Emitir una secuencia de cadenas----------//
    //---------------------------------------------------//

    //---------------------------------------------------//
    //----------Emitir una secuencia de arrays-----------//

    // const fruit$ = of(["Fresa", "Cereza"], ["Limón", "Naranja"]);
    const fruit$ = scheduled([["Fresa", "Cereza"], ["Limón", "Naranja"]], queueScheduler);

    fruit$.subscribe((fruit) => console.log(fruit));

    //----------Emitir una secuencia de arrays-----------//
    //---------------------------------------------------//

    //---------------------------------------------------//
    //----------Emitir una secuencia de objetos----------//

    const iceCream$ = of(
      { size: "Grande", toppings: ["Galletas Oreo", "Sirope de Chocolate"] },
      { size: "Pequeño", toppings: ["Fresas"] }
    );
    
    iceCream$.subscribe(console.log);
    
    //----------Emitir una secuencia de objetos----------//
    //---------------------------------------------------//
  }

}

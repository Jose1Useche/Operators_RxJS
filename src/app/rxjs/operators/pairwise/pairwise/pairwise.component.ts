import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { map, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-pairwise',
  templateUrl: './pairwise.component.html',
  styleUrls: ['./pairwise.component.css']
})
export class PairwiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------//
    //--Agrupar la cadena anterior y la actual en un array--//

    const framework$ = from(["Angular", "React", "Vue"]);

    framework$.pipe(pairwise()).subscribe(console.log);// Salida: ["Angular", "React"], ["React", "Vue"]

    //--Agrupar la cadena anterior y la actual en un array--//
    //------------------------------------------------------//

    //-----------------------------------------------------------------------------------//
    //--Agrupar los códigos de las teclas pulsadas (a partir de la segunda) por parejas--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown").pipe(
      map(({ code }) => code)
    );
    
    key$.pipe(pairwise()).subscribe(console.log);// Salida: ["KeyR", "KeyX"], ["KeyJ", "KeyS"]...

    //--Agrupar los códigos de las teclas pulsadas (a partir de la segunda) por parejas--//
    //-----------------------------------------------------------------------------------//
  }

}

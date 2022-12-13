import { Component, OnInit } from '@angular/core';
import { from, interval, of, timer, zip } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.css']
})
export class ZipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------------//
    //--Esperar a que dos Observables emitan un valor, y emitir ambos valores en un array--//

    const hello$ = timer(2000).pipe(mapTo("Hello"));
    const world$ = timer(4000).pipe(mapTo("World"));

    zip(hello$, world$).subscribe(console.log);// Salida: ['Hello', 'World']

    //--Esperar a que dos Observables emitan un valor, y emitir ambos valores en un array--//
    //-------------------------------------------------------------------------------------//

    //-----------------------------------------------------------------//
    //-- Emitir una cadena cada vez que interval emite (cada segundo)--//

    const framework$ = zip(from(["Angular", "React", "Vue"]), interval(1000)).pipe(
      map(([framework]) => framework)
    );
    
    framework$.subscribe(console.log);// Salida: (1s) Angular (1s) React (1s) Vue

    //-- Emitir una cadena cada vez que interval emite (cada segundo)--//
    //-----------------------------------------------------------------//

    //-----------------------------------------------------//
    //--Combinar la edad y el nombre de distintas fuentes--//

    let age$ = of < number > (27, 25, 29);
    let name$ = of < string > ("Foo", "Bar", "Beer");
    let isDev$ = of < boolean > (true, true, false);

    zip(age$, name$, isDev$)
      // .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
      .subscribe((x) => console.log(x));

    zip(age$, name$, isDev$)
    .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
    .subscribe((x) => console.log(x));

    //--Combinar la edad y el nombre de distintas fuentes--//
    //-----------------------------------------------------//
  }

}

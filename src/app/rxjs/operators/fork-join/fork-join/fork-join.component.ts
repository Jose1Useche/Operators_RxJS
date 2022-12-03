import { Component, OnInit } from '@angular/core';
import { forkJoin, from, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-----------------------------------------------------------//
    //--Combinar la última emisión de dos Observables distintos--//

    const language$ = forkJoin([
      of("Java", "Ruby", "Haskell"), 
      from(["Orientado a objetos", "Multiparadigma", "Funcional"])
    ]);
    
    language$.subscribe(console.log);// Salida: ["Haskell", "Funcional"]

    //--Combinar la última emisión de dos Observables distintos--//
    //-----------------------------------------------------------//

    //----------------------------------------------------------------------------------------------//
    //Combinar la última emisión de dos Observables distintos, contenidos en un diccionario de datos//

    const languageDictionary$ = forkJoin({
      language: of("Java", "Ruby", "Haskell"),
      type: from(["Orientado a objetos", "Multiparadigma", "Funcional"]),
    });
    
    languageDictionary$.subscribe(console.log);// Salida: { language: Haskell, type: Funcional }

    //Combinar la última emisión de dos Observables distintos, contenidos en un diccionario de datos//
    //----------------------------------------------------------------------------------------------//

    //-----------------------------------------------------------------------------------------------------------------------------------------//
    //Si alguno de los Observables de entrada lanza un error, el Observable resultante lanzará un error inmediatamente, y el flujo se terminará//

    const message$ = from(["Este mensaje no se emitirá"]);
    const error$ = throwError("Oh no");
    const sadMessage$ = from(["No se llega a emitir :("]);
    
    forkJoin([message$, sadMessage$, error$]).subscribe(console.log, console.error);// Salida: (error) Oh no

    //Si alguno de los Observables de entrada lanza un error, el Observable resultante lanzará un error inmediatamente, y el flujo se terminará//
    //-----------------------------------------------------------------------------------------------------------------------------------------//

    //-----------------------------------------------------------------------------------------------------------------------------------------//
    //Si se utiliza el operador catchError en el Observable de entrada que lanza el error, el Observable resultante se completará sin problemas//
    
    const message2$ = from(["Este mensaje se emitirá"]);

    // Capturando el error con catchError
    const error2$ = throwError("Oh no").pipe(catchError((err) => of(err)));

    const happyMessage$ = from(["Ahora sí se emite :)"]);

    forkJoin([message2$, error2$, happyMessage$]).subscribe(console.log);// Salida: ['Este mensaje se emitirá', 'Oh no', 'Ahora sí se emite :)']
    
    //Si se utiliza el operador catchError en el Observable de entrada que lanza el error, el Observable resultante se completará sin problemas//
    //-----------------------------------------------------------------------------------------------------------------------------------------//


  }

}

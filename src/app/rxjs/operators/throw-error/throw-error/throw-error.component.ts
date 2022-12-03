import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.css']
})
export class ThrowErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------//
    //------------Emitir un error simple------------//

    const error$ = throwError("¡Oh no!");

    error$.subscribe(
      result => console.log('next ==> ' + result),
      error => {
        console.error('error ==> ' + error)
        alert(error);
      },
      () => console.log('Completed!')
    );

    //------------Emitir un error simple------------//
    //----------------------------------------------//

    //---------------------------------------------------------------------//
    //------------Lanzar un error según se cumpla una condición------------//

    const user$ = of(
      { name: "NyaGarcía", age: 23 },
      { name: "zaldih", age: 21 },
      { name: "carla.1003", age: 17 },
      { name: "caballerog", age: 35 }
    );
    
    user$
      .pipe(
        concatMap((user) =>
          user.age < 18 ? throwError(`Menor de edad: ${user.name}`) : of(user)
        )
      )
      .subscribe(console.log, console.error);

    //------------Lanzar un error según se cumpla una condición------------//
    //---------------------------------------------------------------------//
  }

}

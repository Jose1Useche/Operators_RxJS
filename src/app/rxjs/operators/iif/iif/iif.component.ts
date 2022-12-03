import { Component, OnInit } from '@angular/core';
import { iif, of } from 'rxjs';

@Component({
  selector: 'app-iif',
  templateUrl: './iif.component.html',
  styleUrls: ['./iif.component.css']
})
export class IifComponent implements OnInit {

  subscribeToFirst: boolean;
  accessGranted: boolean;

  constructor() { }

  ngOnInit(): void {

    //--------------------------------------------------------------------------------//
    //-----------Cambia en tiempo de ejecución qué Observable será suscrito-----------//

    const firstOrSecond = iif(() => this.subscribeToFirst, of("first"), of("second"));

    this.subscribeToFirst = true;
    firstOrSecond.subscribe((value) => console.log(value));

    this.subscribeToFirst = false;
    firstOrSecond.subscribe((value) => console.log(value));

    //-----------Cambia en tiempo de ejecución qué Observable será suscrito-----------//
    //--------------------------------------------------------------------------------//

    //-------------------------------------------------------------------------------//
    //----------------------Controlar el acceso a un Observable----------------------//

    const observableIfYouHaveAccess = iif(
      () => this.accessGranted,
      of("It seems you have an access...") // Note that only one Observable is passed to the operator.
    );
    
    this.accessGranted = true;
    observableIfYouHaveAccess.subscribe(
      (value) => console.log(value),
      (err) => {},
      () => console.log("The end")
    );
    
    // Logs:
    // "It seems you have an access..."
    // "The end"
    
    this.accessGranted = false;
    observableIfYouHaveAccess.subscribe(
      (value) => console.log(value),
      (err) => {},
      () => console.log("The end")
    );

    // Logs:
    // "The end"
    
    //----------------------Controlar el acceso a un Observable----------------------//
    //-------------------------------------------------------------------------------//
  }

}

import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { bufferToggle } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-toggle',
  templateUrl: './buffer-toggle.component.html',
  styleUrls: ['./buffer-toggle.component.css']
})
export class BufferToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------//
    //--Abrir el búfer cada cuatro segundos, durante dos segundos--//

    const number$ = interval(1000);

    number$.pipe(
      bufferToggle(interval(4000), () => interval(2000))
      )
      .subscribe(console.log);
    // Salida: [3, 4, 5], [7, 8, 9], [11, 12, 13]...

    //--Abrir el búfer cada cuatro segundos, durante dos segundos--//
    //-------------------------------------------------------------//

    //-----------------------------------------------------------------------------------------------------//
    //--Emitir eventos MouseEvent mientras esté pulsado el botón del mouse, hasta que dejemos de pulsarlo--//

    const mouse$ = fromEvent<MouseEvent>(document, "mousemove");

    mouse$
      .pipe(
        bufferToggle(fromEvent(document, "mousedown"), (_) =>
          fromEvent(document, "mouseup")
        )
      )
      .subscribe(console.log);
    // Salida: [MouseEvent, MouseEvent, MouseEvent, MouseEvent]...

    //--Emitir eventos MouseEvent mientras esté pulsado el botón del mouse, hasta que dejemos de pulsarlo--//
    //-----------------------------------------------------------------------------------------------------//
  }

}

import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
  styleUrls: ['./audit-time.component.css']
})
export class AuditTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //---------------------------------------------------------------------------------------------------------------//
    //--Ignorar las teclas pulsadas durante un periodo de 2s, tras el cual emitir la última tecla pulsada. Repetir.--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$.pipe(auditTime(2000)).subscribe(({ code }) => console.log(code));
    // Salida: (2s) KeyX (2s) KeyO...

    //--Ignorar las teclas pulsadas durante un periodo de 2s, tras el cual emitir la última tecla pulsada. Repetir.--//
    //---------------------------------------------------------------------------------------------------------------//

    //-----------------------------------------//
    //--Emite como mucho un click por segundo--//

    const clicks = fromEvent(document, "click");
    const result = clicks.pipe(auditTime(1000));
    result.subscribe((x) => console.log(x));

    //--Emite como mucho un click por segundo--//
    //-----------------------------------------//
  }

}

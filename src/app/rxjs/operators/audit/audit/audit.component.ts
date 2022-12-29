import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { audit } from 'rxjs/operators';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //-------------------------------------------------------------------------------------------------//
    //--Ignorar las teclas pulsadas durante 2s, y emitir la última tecla pulsada. Repetir el proceso.--//

    const key$ = fromEvent<KeyboardEvent>(document, "keydown");

    key$
      .pipe(audit(() => interval(2000)))
      .subscribe(({ code }) => console.log(code));// Salida: (Pulsar tecla y) (Pulsar tecla x) (2s) KeyX (Pulsar tecla o) (2s) KeyO...

    //--Ignorar las teclas pulsadas durante 2s, y emitir la última tecla pulsada. Repetir el proceso.--//
    //-------------------------------------------------------------------------------------------------//

    //----------------------------------------------------------------//
    //--Emite clicks a un ritmo de, como mucho, un click por segundo--//

    const clicks = fromEvent(document, "click");
    const result = clicks.pipe(audit((ev) => interval(1000)));
    result.subscribe((x) => console.log(x));

    //--Emite clicks a un ritmo de, como mucho, un click por segundo--//
    //----------------------------------------------------------------//
  }

}

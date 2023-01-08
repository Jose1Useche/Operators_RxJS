import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, materialize } from 'rxjs/operators';

@Component({
  selector: 'app-materialize',
  templateUrl: './materialize.component.html',
  styleUrls: ['./materialize.component.css']
})
export class MaterializeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //------------------------------------------------------------------------//
    //--Convierte un Observable defectuoso en un Observable de Notifications--//

    const letters = of("a", "b", 13, "d").pipe(map((x: string) => x.toUpperCase()));
    letters.pipe(materialize()).subscribe(console.log);

    // Salida:
    // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
    // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
    // - Notification {kind: "E", value: undefined, error: TypeError:
    //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
    //   [as project] (http://1…, hasValue: false}

    //--Convierte un Observable defectuoso en un Observable de Notifications--//
    //------------------------------------------------------------------------//
  }

}

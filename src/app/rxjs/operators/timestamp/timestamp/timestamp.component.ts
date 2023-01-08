import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.css']
})
export class TimestampComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //----------------------------------------------------------------------------//
    //--En este ejemplo hay un timestamp adjuntado al evento click del documento--//

    const clickWithTimestamp = fromEvent(document, "click").pipe(timestamp());

    // Emite datos de tipo { value: MouseEvent, timestamp: number }
    clickWithTimestamp.subscribe(console.log);

    //--En este ejemplo hay un timestamp adjuntado al evento click del documento--//
    //----------------------------------------------------------------------------//
  }

}

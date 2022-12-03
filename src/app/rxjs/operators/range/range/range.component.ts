import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const number = range(5);

    number.subscribe((number) => console.log(number), e => null, () => console.log('Completed'));

    const number2 = range(1,5);

    number2.subscribe((number) => console.log(number), e => null, () => console.log('Completed'));
  }

}

import { Component, OnInit } from '@angular/core';
import { generate, Subscription } from 'rxjs';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    generate(1, x => x < 3, x => x + 1)
    .subscribe(
      n => console.log('next ==> ' + n), 
      e => console.log('error ==> ' + e),
      () => console.log('Completed!')
      );
  }

}

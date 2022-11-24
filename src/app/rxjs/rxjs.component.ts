import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { first, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    map((x: number) => x * x)(of(1, 2, 3)).subscribe(v => console.log(`valor: ${v}`)); //Operador de Creacion

    first()(of(0,1, 2, 3)).subscribe((v) => console.log(`valor: ${v}`)); //Operador de Creacion

    of(1,2,3).pipe(map((x: number) => x * x), filter(x => x > 1), first()).subscribe(v => console.log(`Nuevo valor: ${v}`)); //Operador de Tubería

    console.log('*************************************************************************')

    const fromObservable = from([[1,2], [3,4], [5,6]]);

    fromObservable.subscribe(data => {console.log(data)});
  }

}



// Logs:
// valor: 1
// valor: 4
// valor: 9
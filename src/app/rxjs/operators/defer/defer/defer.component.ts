import { Component, OnDestroy, OnInit } from '@angular/core';
import { defer, interval, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css']
})
export class DeferComponent implements OnInit, OnDestroy {

  mySubscription: Subscription;
  myInterval = interval(1000);

  readonly fruits: string[] = ['Cereza', 'Fresa', 'Mora', 'Arándano'];

  randomFruit$ = of(this.getRandomFruit()); // Cada suscriptor a este Observable recibirá SIEMPRE la misma fruta, ya que la función getRandomFruit se ejecuta solo una vez en el momento en el que se crea el Observable.

  randomFruitForReal$ = defer(() => of(this.getRandomFruit())); // Cada suscriptor a este Observable recibirá una fruta DISTINTA cada vez, ya que la función getRandomFruit se ejecuta cada vez que nos suscribimos.

  constructor() { }
  
  ngOnInit(): void {
  }
  
  getRandomFruit() {
    return this.fruits[Math.floor(Math.random() * 3)];
  }

  newSubscription() {
    this.randomFruit$.subscribe(
                            data => console.log('randomFruit: next ==> ' + data),
                            data => console.log('randomFruit: error ==> ' + data),
                            () => console.log('Terminé el observable en randomFruit'));

    this.randomFruitForReal$.subscribe(
                                  data => console.log('randomFruitForReal: next ==> ' + data),
                                  data => console.log('randomFruitForReal: error ==> ' + data),
                                  () => console.log('Terminé el observable en randomFruitForReal'));

    // if(this.mySubscription)
    //   this.mySubscription.unsubscribe();

    // this.mySubscription = this.myInterval.subscribe(
    //                                                 data => console.log('next: ' + data), 
    //                                                 data => console.log('error: ' + data), 
    //                                                 () => console.log('Terminé el observable')
    //                                                );
  }

  
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}

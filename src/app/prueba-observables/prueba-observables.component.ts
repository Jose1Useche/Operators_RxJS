import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-prueba-observables',
  templateUrl: './prueba-observables.component.html',
  styleUrls: ['./prueba-observables.component.css']
})
export class PruebaObservablesComponent implements OnInit, OnDestroy {

  mySubscription: Subscription;

  constructor() { }
  
  ngOnInit(): void {
    // this.mySubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        
        observer.next(count);

        if(count === 3) 
          observer.complete();

        if(count > 5) 
          observer.error(new Error('Mi mensaje de error: count > 3'));

        count++;
      }, 1000);
    });

    this.mySubscription = customIntervalObservable
                            .pipe(
                              filter(data => {
                                return data > 0;
                              }),
                              map((data: number) => {
                                return 'Numero ' + (data + 1);
                              }))
                            .subscribe(data => {
                              console.log(data);
                            }, error => {
                                console.log(error);
                                alert(error.message);
                            }, () =>{
                              console.log('Tarea completada!');
                            }
                          );
  }
  
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}

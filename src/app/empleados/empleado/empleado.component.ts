import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit, OnDestroy {

  urlId: number;
  ancla: string;
  queryParams1: string;
  queryParams2: string;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.urlId = this.route.snapshot.params['myId'];
    this.ancla = this.route.snapshot.fragment;
    this.queryParams1 = this.route.snapshot.queryParams['consulta1'];
    this.queryParams2 = this.route.snapshot.queryParams['consulta2'];

    this.paramsSubscription = this.route.params.subscribe(
                                (params: Params) => {
                                  this.urlId = params['myId'];
                                }
                              );

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.queryParams1 = queryParams['consulta1'];
      }
    );

    this.route.fragment.subscribe(
      (fragment) => {
        this.ancla = fragment;
      }
    );
  }

  cargaNuevaRuta(id: number) {
    this.router.navigate(['/empleados', id], { queryParams: {consulta1: 17, consulta2: 18}, fragment: 'mi-fragmento-ts' });
  }

  editWorker() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}

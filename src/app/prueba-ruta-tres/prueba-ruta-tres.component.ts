import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-prueba-ruta-tres',
  templateUrl: './prueba-ruta-tres.component.html',
  styleUrls: ['./prueba-ruta-tres.component.css']
})
export class PruebaRutaTresComponent implements OnInit {

  number: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.number = +this.route.snapshot.params['id'];
    this.route.params.subscribe((id: Params) => {
      this.number = +id['id'];
      this.muestraNumero(this.number);
    });
  }

  muestraNumero(number: number) {
    console.log('Hola bebe ', number + 1);
  }

}

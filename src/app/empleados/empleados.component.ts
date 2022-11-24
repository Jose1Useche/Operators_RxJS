import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  
  misEmpleados: Empleado[] = [];

  constructor(private empleados: EmpleadosService) { }

  ngOnInit(): void {
    this.misEmpleados = this.empleados.empleados;
  }

}

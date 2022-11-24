import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  empleados: Empleado[] = [
    new Empleado(1, 'José', 'Useche'),
    new Empleado(2, 'Nohemi', 'Cuevas de Useche'),
    new Empleado(3, 'Juan', 'Useche'),
    new Empleado(4, 'María', 'Useche')
  ];

  constructor() { }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosComponent } from './empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadosRoutingModule } from './empleados.routing.module';

@NgModule({
    declarations: [
        EmpleadosComponent,
        EmpleadoComponent
    ],
    imports: [
        CommonModule,
        EmpleadosRoutingModule,
    ]
})
export class EmpleadosModule {}
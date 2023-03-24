import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpleadosComponent } from './empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HermanoEmpleadoComponent } from './hermano-empleado/hermano-empleado.component';
import { EditComponent } from './empleado/edit/edit.component';
import { AuthGuardService } from '../auth-guard/auth-guard.service';

const appRoutes: Routes = [
    {path: 'empleados', canActivateChild: [AuthGuardService] ,component: EmpleadosComponent, children: [
      {path: ':myId', component: EmpleadoComponent, children: [
        {path: 'edit', component: EditComponent}
      ]},
      {path: ':myId/:name', component: HermanoEmpleadoComponent},
    ]},
  ];

  @NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
  })
  export class EmpleadosRoutingModule {}
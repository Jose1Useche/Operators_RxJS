import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleados/empleado/empleado.component';
import { HermanoEmpleadoComponent } from './empleados/hermano-empleado/hermano-empleado.component';
import { EditComponent } from './empleados/empleado/edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './cursos/curso/curso.component';

import { AuthGuardService } from './auth-guard/auth-guard.service';
import { ExitGuard } from './auth-guard/exit.guard';
import { CursosResolverGuard } from './guards/cursos-resolver.guard';
import { CursoResolverGuard } from './guards/curso-resolver.guard';
import { PruebaRutaComponent } from './prueba-ruta/prueba-ruta.component';
import { PruebaRutaDosComponent } from './prueba-ruta-dos/prueba-ruta-dos.component';
import { PruebaRutaTresComponent } from './prueba-ruta-tres/prueba-ruta-tres.component';
import { PruebaObservablesComponent } from './prueba-observables/prueba-observables.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AjaxComponent } from './rxjs/operators/ajax/ajax/ajax.component';
import { DeferComponent } from './rxjs/operators/defer/defer/defer.component';
import { FromComponent } from './rxjs/operators/from/from/from.component';
import { FromEventComponent } from './rxjs/operators/fromevent/from-event/from-event.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'registrate', canDeactivate: [ExitGuard],component: RegistrateComponent},
    {path: 'contactanos', canDeactivate: [ExitGuard], component: ContactanosComponent},
    {path: 'empleados', canActivateChild: [AuthGuardService] ,component: EmpleadosComponent, children: [
      {path: ':myId', component: EmpleadoComponent, children: [
        {path: 'edit', component: EditComponent}
      ]},
      {path: ':myId/:name', component: HermanoEmpleadoComponent},
    ]},
    {path: 'cursos', resolve: {cursos: CursosResolverGuard},component: CursosComponent, children: [
      {path: ':id', resolve: {curso: CursoResolverGuard}, component: CursoComponent}
    ]},
    {path: 'not-authorized', component: NotAuthorizedComponent},
    // {path: 'not-found', component: NotFoundComponent},
    {path: 'test', component: PruebaRutaComponent, children: [
      {path: 'test2', component: PruebaRutaDosComponent},
      {path: ':id', component: PruebaRutaTresComponent},
    ]},
    {path: 'observables', component: PruebaObservablesComponent},
    {path: 'rxjs-test', component: RxjsComponent},
    //-------------------------------------------------//
    //--------------------Operators--------------------//
    {path: 'ajax', component: AjaxComponent},
    {path: 'defer', component: DeferComponent},
    {path: 'from', component: FromComponent},
    {path: 'from-event', component: FromEventComponent},
    //--------------------Operators--------------------//
    //-------------------------------------------------//
    {path: 'not-found', component: ErrorMessageComponent, data: {miMensaje: 'Página no encontrada (data-route)'}},
    {path: '**', redirectTo: 'not-found'}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
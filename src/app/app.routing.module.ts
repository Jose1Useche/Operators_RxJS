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
import { FromEventPatternComponent } from './rxjs/operators/fromEventPattern/from-event-pattern/from-event-pattern.component';
import { GenerateComponent } from './rxjs/operators/generate/generate/generate.component';
import { IntervalComponent } from './rxjs/operators/interval/interval/interval.component';
import { OfComponent } from './rxjs/operators/of/of/of.component';
import { RangeComponent } from './rxjs/operators/range/range/range.component';
import { ThrowErrorComponent } from './rxjs/operators/throw-error/throw-error/throw-error.component';
import { TimerComponent } from './rxjs/operators/timer/timer/timer.component';
import { IifComponent } from './rxjs/operators/iif/iif/iif.component';
import { CombineLatestComponent } from './rxjs/operators/combineLatest/combine-latest/combine-latest.component';
import { ConcatComponent } from './rxjs/operators/concat/concat/concat.component';
import { ForkJoinComponent } from './rxjs/operators/fork-join/fork-join/fork-join.component';
import { MergeComponent } from './rxjs/operators/merge/merge/merge.component';
import { PartitionComponent } from './rxjs/operators/partition/partition/partition.component';
import { RaceComponent } from './rxjs/operators/race/race/race.component';


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
    {path: 'from-event-pattern', component: FromEventPatternComponent},
    {path: 'generate', component: GenerateComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'of', component: OfComponent},
    {path: 'range', component: RangeComponent},
    {path: 'throw-error', component: ThrowErrorComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'iif', component: IifComponent},

    {path: 'combine-latest', component: CombineLatestComponent},
    {path: 'concat', component: ConcatComponent},
    {path: 'fork-join', component: ForkJoinComponent},
    {path: 'merge', component: MergeComponent},
    {path: 'partition', component: PartitionComponent},
    {path: 'race', component: RaceComponent},
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
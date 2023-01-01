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
import { ZipComponent } from './rxjs/operators/zip/zip/zip.component';
import { BufferComponent } from './rxjs/operators/buffer/buffer/buffer.component';
import { BufferCountComponent } from './rxjs/operators/buffer-count/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './rxjs/operators/buffer-time/buffer-time/buffer-time.component';
import { BufferToggleComponent } from './rxjs/operators/buffer-toggle/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './rxjs/operators/buffer-when/buffer-when/buffer-when.component';
import { ConcatMapComponent } from './rxjs/operators/concat-map/concat-map/concat-map.component';
import { ExhaustMapComponent } from './rxjs/operators/exhaust-map/exhaust-map/exhaust-map.component';
import { ExpandComponent } from './rxjs/operators/expand/expand/expand.component';
import { GroupByComponent } from './rxjs/operators/group-by/group-by/group-by.component';
import { MapComponent } from './rxjs/operators/map/map/map.component';
import { MergeMapComponent } from './rxjs/operators/merge-map/merge-map/merge-map.component';
import { MergeScanComponent } from './rxjs/operators/merge-scan/merge-scan/merge-scan.component';
import { PairwiseComponent } from './rxjs/operators/pairwise/pairwise/pairwise.component';
import { ScanComponent } from './rxjs/operators/scan/scan/scan.component';
import { SwitchMapComponent } from './rxjs/operators/switch-map/switch-map/switch-map.component';
import { WindowComponent } from './rxjs/operators/window/window/window.component';
import { WindowCountComponent } from './rxjs/operators/window-count/window-count/window-count.component';
import { WindowTimeComponent } from './rxjs/operators/window-time/window-time/window-time.component';
import { WindowToggleComponent } from './rxjs/operators/window-toggle/window-toggle/window-toggle.component';
import { WindowWhenComponent } from './rxjs/operators/window-when/window-when/window-when.component';
import { AuditComponent } from './rxjs/operators/audit/audit/audit.component';
import { AuditTimeComponent } from './rxjs/operators/audit-time/audit-time/audit-time.component';
import { DebounceComponent } from './rxjs/operators/debounce/debounce/debounce.component';
import { DebounceTimeComponent } from './rxjs/operators/debounce-time/debounce-time/debounce-time.component';
import { DistinctComponent } from './rxjs/operators/distinct/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './rxjs/operators/distinct-until-changed/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './rxjs/operators/distinct-until-key-changed/distinct-until-key-changed/distinct-until-key-changed.component';
import { ElementAtComponent } from './rxjs/operators/element-at/element-at/element-at.component';
import { FilterComponent } from './rxjs/operators/filter/filter/filter.component';
import { FirstComponent } from './rxjs/operators/first/first/first.component';
import { IgnoreElementsComponent } from './rxjs/operators/ignore-elements/ignore-elements/ignore-elements.component';
import { LastComponent } from './rxjs/operators/last/last/last.component';
import { SampleComponent } from './rxjs/operators/sample/sample/sample.component';
import { SampleTimeComponent } from './rxjs/operators/sample-time/sample-time/sample-time.component';
import { SingleComponent } from './rxjs/operators/single/single/single.component';
import { SkipComponent } from './rxjs/operators/skip/skip/skip.component';
import { SkipLastComponent } from './rxjs/operators/skip-last/skip-last/skip-last.component';
import { SkipUntilComponent } from './rxjs/operators/skip-until/skip-until/skip-until.component';
import { SkipWhileComponent } from './rxjs/operators/skip-while/skip-while/skip-while.component';
import { TakeComponent } from './rxjs/operators/take/take/take.component';
import { TakeLastComponent } from './rxjs/operators/take-last/take-last/take-last.component';
import { TakeUntilComponent } from './rxjs/operators/take-until/take-until/take-until.component';
import { TakeWhileComponent } from './rxjs/operators/take-while/take-while/take-while.component';
import { ThrottleComponent } from './rxjs/operators/throttle/throttle/throttle.component';
import { ThrottleTimeComponent } from './rxjs/operators/throttle-time/throttle-time/throttle-time.component';


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
    {path: 'zip', component: ZipComponent},

    {path: 'buffer', component: BufferComponent},
    {path: 'buffer-count', component: BufferCountComponent},
    {path: 'buffer-time', component: BufferTimeComponent},
    {path: 'buffer-toggle', component: BufferToggleComponent},
    {path: 'buffer-when', component: BufferWhenComponent},
    {path: 'concat-map', component: ConcatMapComponent},
    {path: 'exhaust-map', component: ExhaustMapComponent},
    {path: 'expand', component: ExpandComponent},
    {path: 'group-by', component: GroupByComponent},
    {path: 'map', component: MapComponent},
    {path: 'merge-map', component: MergeMapComponent},
    {path: 'merge-scan', component: MergeScanComponent},
    {path: 'pairwise', component: PairwiseComponent},
    {path: 'scan', component: ScanComponent},
    {path: 'switch-map', component: SwitchMapComponent},
    {path: 'window', component: WindowComponent},
    {path: 'window-count', component: WindowCountComponent},
    {path: 'window-time', component: WindowTimeComponent},
    {path: 'window-toggle', component: WindowToggleComponent},
    {path: 'window-when', component: WindowWhenComponent},

    {path: 'audit', component: AuditComponent},
    {path: 'audit-time', component: AuditTimeComponent},
    {path: 'debounce', component: DebounceComponent},
    {path: 'debounce-time', component: DebounceTimeComponent},
    {path: 'distinct', component: DistinctComponent},
    {path: 'distinct-until-changed', component: DistinctUntilChangedComponent},
    {path: 'distinct-until-key-changed', component: DistinctUntilKeyChangedComponent},
    {path: 'element-at', component: ElementAtComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'first', component: FirstComponent},
    {path: 'ignore-elements', component: IgnoreElementsComponent},
    {path: 'last', component: LastComponent},
    {path: 'sample', component: SampleComponent},
    {path: 'sample-time', component: SampleTimeComponent},
    {path: 'single', component: SingleComponent},
    {path: 'skip', component: SkipComponent},
    {path: 'skip-last', component: SkipLastComponent},
    {path: 'skip-until', component: SkipUntilComponent},
    {path: 'skip-while', component: SkipWhileComponent},
    {path: 'take', component: TakeComponent},
    {path: 'take-last', component: TakeLastComponent},
    {path: 'take-until', component: TakeUntilComponent},
    {path: 'take-while', component: TakeWhileComponent},
    {path: 'throttle', component: ThrottleComponent},
    {path: 'throttle-time', component: ThrottleTimeComponent},
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
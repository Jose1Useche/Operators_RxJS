import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
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
import { FakeAuthService } from './auth-guard/fake-auth.service';
import { ExitGuard } from './auth-guard/exit.guard';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './cursos/curso/curso.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    RegistrateComponent,
    ContactanosComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    HermanoEmpleadoComponent,
    EditComponent,
    NotFoundComponent,
    NotAuthorizedComponent,
    ErrorMessageComponent,
    CursosComponent,
    CursoComponent,
    PruebaRutaComponent,
    PruebaRutaDosComponent,
    PruebaRutaTresComponent,
    PruebaObservablesComponent,
    RxjsComponent,
    AjaxComponent,
    DeferComponent,
    FromComponent,
    FromEventComponent,
    FromEventPatternComponent,
    GenerateComponent,
    IntervalComponent,
    OfComponent,
    RangeComponent,
    ThrowErrorComponent,
    TimerComponent,
    IifComponent,
    CombineLatestComponent,
    ConcatComponent,
    ForkJoinComponent,
    MergeComponent,
    PartitionComponent,
    RaceComponent,
    ZipComponent,
    BufferComponent,
    BufferCountComponent,
    BufferTimeComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    ExpandComponent,
    GroupByComponent,
    MapComponent,
    MergeMapComponent,
    MergeScanComponent,
    PairwiseComponent,
    ScanComponent,
    SwitchMapComponent,
    WindowComponent,
    WindowCountComponent,
    WindowTimeComponent,
    WindowToggleComponent,
    WindowWhenComponent,
    AuditComponent,
    AuditTimeComponent,
    DebounceComponent,
    DebounceTimeComponent,
    DistinctComponent,
    DistinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
    ElementAtComponent,
    FilterComponent,
    FirstComponent,
    IgnoreElementsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FakeAuthService, ExitGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

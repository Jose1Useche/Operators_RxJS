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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FakeAuthService, ExitGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

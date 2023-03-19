import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
//*********************************************************************************
import { FakeAuthService } from './auth-guard/fake-auth.service';
import { AuthInterceptorTestService } from './services/auth-interceptor-test.service';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor-service/auth-interceptor.service';
import { TestInterceptorService } from './services/test-interceptor.service';
//*********************************************************************************
import { ExitGuard } from './auth-guard/exit.guard';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './cursos/curso/curso.component';
import { PruebaRutaComponent } from './prueba-ruta/prueba-ruta.component';
import { PruebaRutaDosComponent } from './prueba-ruta-dos/prueba-ruta-dos.component';
import { PruebaRutaTresComponent } from './prueba-ruta-tres/prueba-ruta-tres.component';
import { PruebaObservablesComponent } from './prueba-observables/prueba-observables.component';

import { SubjectsComponent } from './subjects/subjects.component';
import { FormularioComponent } from './forms/template-driven-forms/formulario/formulario.component';
import { EjercicioSixComponent } from './forms/ejercicios/ejercicio-six/ejercicio-six.component';
import { ReactiveFormComponent } from './forms/reactive-forms/reactive-form/reactive-form.component';
import { PipeTestComponent } from './pipes/pipe-test/pipe-test.component';
import { FilterOrdersPipe } from './pipes/my-pipes/filter-orders.pipe';
import { MyPostsComponent } from './http-request/primera-prueba/my-posts/my-posts.component';
import { AuthComponent } from './auth/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SignInComponent } from './signin-signup/sign-in/sign-in.component';
import { SignUpComponent } from './signin-signup/sign-up/sign-up.component';
import { RxJSModule } from './rxjs/rxjs.module';

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
  
    SubjectsComponent,
    FormularioComponent,
    EjercicioSixComponent,
    ReactiveFormComponent,
    PipeTestComponent,
    FilterOrdersPipe,
    MyPostsComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    RxJSModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    FakeAuthService, 
    ExitGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TestInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistrateComponent } from './registrate/registrate.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './cursos/curso/curso.component';
import { ExitGuard } from './auth-guard/exit.guard';
import { CursosResolverGuard } from './guards/cursos-resolver.guard';
import { CursoResolverGuard } from './guards/curso-resolver.guard';
import { AuthGuard } from './guards/auth.guard';
import { PruebaRutaComponent } from './prueba-ruta/prueba-ruta.component';
import { PruebaRutaDosComponent } from './prueba-ruta-dos/prueba-ruta-dos.component';
import { PruebaRutaTresComponent } from './prueba-ruta-tres/prueba-ruta-tres.component';
import { PruebaObservablesComponent } from './prueba-observables/prueba-observables.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FormularioComponent } from './forms/template-driven-forms/formulario/formulario.component';
import { EjercicioSixComponent } from './forms/ejercicios/ejercicio-six/ejercicio-six.component';
import { ReactiveFormComponent } from './forms/reactive-forms/reactive-form/reactive-form.component';
import { PipeTestComponent } from './pipes/pipe-test/pipe-test.component';
import { MyPostsComponent } from './http-request/primera-prueba/my-posts/my-posts.component';
import { AuthComponent } from './auth/auth/auth.component';
import { SignInComponent } from './signin-signup/sign-in/sign-in.component';
import { SignUpComponent } from './signin-signup/sign-up/sign-up.component';

import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: 'registrate', canDeactivate: [ExitGuard],component: RegistrateComponent},
    {path: 'contactanos', canDeactivate: [ExitGuard], component: ContactanosComponent},
    {path: 'cursos', resolve: {cursos: CursosResolverGuard},component: CursosComponent, children: [
      {path: ':id', resolve: {curso: CursoResolverGuard}, component: CursoComponent}
    ]},
    {
      path: 'empleados', 
      loadChildren: () => import('./empleados/empleados.module').then(m => m.EmpleadosModule),
      data: { preload: true }
    },
    {
      path: 'base', 
      loadChildren: () => import('./lazy-loading/base.module').then(m => m.BaseModule),
      data: { preload: true }
    },
    {path: 'not-authorized', component: NotAuthorizedComponent},
    {path: 'test', component: PruebaRutaComponent, children: [
      {path: 'test2', component: PruebaRutaDosComponent},
      {path: ':id', component: PruebaRutaTresComponent},
    ]},
    {path: 'observables', component: PruebaObservablesComponent},
    {path: 'subjects', component: SubjectsComponent},
    {path: 'template-driven', component: FormularioComponent},
    {path: 'ejercicio-six', component: EjercicioSixComponent},
    {path: 'reactive-form', component: ReactiveFormComponent},
    {path: 'pipe-test', component: PipeTestComponent},
    {path: 'my-posts', component: MyPostsComponent, canActivate: [AuthGuard]},
    {path: 'auth', component: AuthComponent},
    {path: 'sign-in', component: SignInComponent, canActivate: [AuthGuard]},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'not-found', component: ErrorMessageComponent, data: {miMensaje: 'Página no encontrada (data-route)'}},
    {path: '**', redirectTo: 'not-found'}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadingStrategyService })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso.model';
import { CursosService } from '../services/cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursosResolverGuard implements Resolve<Curso[]> {
 constructor(private cursosService: CursosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Curso[]> | Promise<Curso[]> | Curso[] {
    
    return this.cursosService.cursosServer().then((data) => {
      return data;
    });
    
  }
}

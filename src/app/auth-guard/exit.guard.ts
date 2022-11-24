import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface Exit {
  onExit() : Observable<boolean> | Promise<boolean> | boolean;
}

export class ExitGuard implements CanDeactivate<Exit> {
  canDeactivate(component: Exit, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot)
      : Observable<boolean> | Promise<boolean> | boolean {

        return component.onExit ? component.onExit() : confirm('Estas seguro de querer salir?');
  }
  
}

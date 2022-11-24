import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { FakeAuthService } from './fake-auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private fakeAuthService: FakeAuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.fakeAuthService.isAuthenticated()
            .then(
                (authenticated) => {
                    if (authenticated) {
                        return authenticated;
                    } else {
                        this.router.navigate(['/not-authorized']);
                        return authenticated;
                    }
                }
            );
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }
}
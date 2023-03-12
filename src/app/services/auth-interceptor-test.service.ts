import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

export class AuthInterceptorTestService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('La peticion está en camino', req.url);

        const peticionModificada = req.clone(
            {
                headers: req.headers.append('Auth', 'xyz')
            }
        );

        return next.handle(peticionModificada);
    }
    
}
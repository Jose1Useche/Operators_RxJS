import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AuthBody } from '../models/auth-body';
import { User } from '../models/user.model';

export interface AuthResponseData {
  idToken:	string;
  email:	string;
  refreshToken:	string;
  expiresIn:	string;
  localId:	string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private user: Subject<User> = new Subject<User>();
  // userObs: Observable<User> = this.user.asObservable();
  private user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  userObs: Observable<User> = this.user.asObservable();
  // private apiKey: string = 'AIzaSyDGef5XSC67rodEWWjGRETWt8Qxcxh_e_Y';
  errorMessage: string = 'Oops... an error has occurred!';
  private tokenExpirationTimer: number = null;


  constructor(private http: HttpClient, private router: Router) { }

  signUp(authBody: AuthBody) {
    return this.http.post<AuthResponseData>(
      // `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
      authBody
    ).pipe(
      catchError(this.errorValidation),
      tap(responseData => {
        this.handleAuthentication(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          +responseData.expiresIn
        );
      })
      );
  }

  signIn(authBody: AuthBody) {
    return this.http.post<AuthResponseData>(
      // `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey,
      authBody
      ).pipe(
        catchError(this.errorValidation),
        tap(responseData => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
        );
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = Date.now() + (expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autologOut(expiresIn * 1000);
    localStorage.setItem('dataDeUsuario', JSON.stringify(user));
  }

  autoLogin() {
    const userData: { email: string, id: string, _token: string, _tokenExpirationDate: number } = JSON.parse(localStorage.getItem('dataDeUsuario'));
    if(!userData)
      return;

    const loadedUser = new User(userData.email, userData.id, userData._token, userData._tokenExpirationDate);
    if(loadedUser.token) {
      this.user.next(loadedUser);
      
      const duracionDelToken = userData._tokenExpirationDate - Date.now();
      this.autologOut(duracionDelToken);
    }
  }
  
  logout() {
    this.user.next(null);
    // localStorage.clear();
    localStorage.removeItem('dataDeUsuario');
    this.router.navigate(['/auth']);

    if(this.tokenExpirationTimer)
      clearTimeout(this.tokenExpirationTimer);

    this.tokenExpirationTimer = null;
  }

  autologOut(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private errorValidation(errorResponse: HttpErrorResponse): Observable<never> {

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(this.errorMessage);
    } else {
      switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          this.errorMessage = 'The email address is already in use by another account.';
          break;
        case 'OPERATION_NOT_ALLOWED':
          this.errorMessage = 'Password sign-in is disabled for this project.';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          this.errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
          break;

        case 'EMAIL_NOT_FOUND':
          this.errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
          break;
        case 'INVALID_PASSWORD':
          this.errorMessage = 'The password is invalid or the user does not have a password.';
          break;
        case 'USER_DISABLED':
          this.errorMessage = 'The user account has been disabled by an administrator.';
        }
    }

    return throwError(this.errorMessage);
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthBody } from 'src/app/models/auth-body';
import { AuthService, AuthResponseData } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  loginButton: boolean = true;
  isSearching: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  switchButton() {
    this.loginButton = !this.loginButton
  }

  onSubmit(form: NgForm) {
    // console.log(form.value); //interesante, si imprimes el objeto completo, se reseta value aun cuando el comando esta una linea despues.
    
    const credentials = new AuthBody(form.value.email,form.value.password);
    this.isSearching = true;
    this.errorMessage = '';
    let authObs: Observable<AuthResponseData>;
    
    if (this.loginButton) {
      authObs = this.authService.signIn(credentials);
    } else {
      authObs = this.authService.signUp(credentials);
    }

    authObs.subscribe(
      next => {
        console.log(next);
        this.isSearching = false;

        this.router.navigate(['/sign-in']);
      },
      error => {
        console.log(error);
        this.errorMessage = error;
        this.isSearching = false;
      });

    form.reset();
  }
}

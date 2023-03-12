import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {

  email: string = 'deafult';
  mySubscription: Subscription;

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.mySubscription = this.authService.userObs.subscribe(u => {
      console.log('sign-in component: ', u ? u.email : this.email);
      if(u)
        this.email = u.email;
    });
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}

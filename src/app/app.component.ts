import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-app';
  conteoClicks: number = 0;
  private mySubscription: Subscription;
  private authServSub: Subscription;
  isAuthenticated: boolean = false;

  constructor(private subjectService: SubjectService, private authService: AuthService) { }
  
  ngOnInit(): void {
    this.mySubscription = this.subjectService.clicks.pipe(map(v => v + 5 )).subscribe(n => {
      this.conteoClicks = this.conteoClicks + n;
    });

    this.authService.autoLogin();

    this.authServSub = this.authService.userObs.subscribe(u => {
      this.isAuthenticated = !!u;
    });
  }
  
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
    this.authServSub.unsubscribe();
  }

  signOut() {
    this.authService.logout();
  }
}

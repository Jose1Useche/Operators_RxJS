import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private subjectService: SubjectService) { }
  
  ngOnInit(): void {
    this.mySubscription = this.subjectService.clicks.pipe(map(v => v + 5 )).subscribe(n => {
      this.conteoClicks = this.conteoClicks + n;
    });
  }
  
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class SubjectService {
    clicks = new Subject<number>();
  }
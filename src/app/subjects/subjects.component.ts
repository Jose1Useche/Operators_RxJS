import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
  }

  mandaConteo() {
    this.subjectService.clicks.next(1);
  }

}

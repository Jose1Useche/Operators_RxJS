import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../models/curso.model';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursosService: CursosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  //  this.cursosService.cursosServer().then((data) => {
  //     this.cursos = data;
  //   });
    this.cursos = this.route.snapshot.data['cursos'];
    
    this.route.data.subscribe((data) => {
      this.cursos = data['cursos'];
    });

  }

}

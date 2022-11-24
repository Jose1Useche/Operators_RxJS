import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Curso } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  curso: Curso;
  id: number;

  constructor(private cursosService: CursosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];

    //   this.cursosService.takeCurso(this.id).then((curso) => {
    //     this.curso = curso;
    //   });
    // });
    this.route.data.subscribe((data) => {
      this.curso = data['curso'];
    });
  }

}

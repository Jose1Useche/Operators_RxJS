import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[] = [
    new Curso(1, 'Angular', '4 month', 5),
    new Curso(2, 'Java Script', '4 month', 4),
    new Curso(3, 'Sass', '4 month', 3),
    new Curso(4, 'CSS', '3 month', 2),
    new Curso(5, 'HTML5', '2 month', 1),
  ];

  constructor() { }

  cursosServer(): Promise<Curso[]> {
    const cursosServer = new Promise<Curso[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.cursos);
      }, 2000);
    });

    return cursosServer;
  } 

  takeCurso(id: number): Promise<Curso> {
    const curso = new Promise<Curso>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.cursos.find(c => c.id == id));
      }, 2000);
    });

    return curso;
  }
    
}

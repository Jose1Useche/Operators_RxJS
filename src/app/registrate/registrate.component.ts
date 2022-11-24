import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Exit } from '../auth-guard/exit.guard';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.css']
})
export class RegistrateComponent implements OnInit, Exit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
  }

  moveToAnotherRoute() {
    // alert('Estoy haciendo algo y luego me voy hacia otra vista');
    this.router.navigate(['/quienes-somos'], { relativeTo: this.route });
  }

  onExit(): boolean | Observable<boolean> | Promise<boolean> {
    return confirm('Pregunto desde el componente si quieres salir');
  }
}

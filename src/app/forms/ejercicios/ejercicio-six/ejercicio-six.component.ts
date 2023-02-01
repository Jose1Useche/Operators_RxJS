import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-six',
  templateUrl: './ejercicio-six.component.html',
  styleUrls: ['./ejercicio-six.component.css']
})
export class EjercicioSixComponent {

  @ViewChild('f') myForm: NgForm;
  usuario = {
    correo: '',
    suscripcion: '',
  };

  onSubmit() {
    console.log(this.myForm);

    this.usuario.correo = this.myForm.value.email;
    this.usuario.suscripcion = this.myForm.value.subscription;

    this.myForm.reset();
  }

}

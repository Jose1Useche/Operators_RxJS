import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @ViewChild('f') myForm: NgForm;
  defaultQuestion: string = 'pet';
  nombre: string = '';
  radioButtons: string[] = ['male','female'];
  nombreSugerido: string = 'Papachongo'

  usuario = {
    nombreDeUsuario: '',
    correo: '',
    preguntaSecreta: '',
    edad: '',
    genero: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(form: HTMLFormElement) {
  //   console.log(form);
  // }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log(form.value.email);
  // }

  onSubmit() {
    console.log(this.myForm);

    this.usuario.nombreDeUsuario = this.myForm.value.personalData.username;
    this.usuario.correo = this.myForm.value.personalData.email;
    this.usuario.preguntaSecreta = this.myForm.value.otraData.secret;
    this.usuario.edad = this.myForm.value.otraData.edad;
    this.usuario.genero = this.myForm.value.otraData.gender;

    this.myForm.reset();
    this.nombre = '';
  }

  sugerirNombre() {
    // this.myForm.setValue({
    //   personalData: {
    //     username: this.nombreSugerido,
    //     email: ''
    //   },
    //   otraData: {
    //     edad: '',
    //     gender: 'male',
    //     secret: 'pet'
    //   }
    // });

    this.myForm.form.patchValue({
      personalData: {
        username: this.nombreSugerido
      }
    });
  }

}

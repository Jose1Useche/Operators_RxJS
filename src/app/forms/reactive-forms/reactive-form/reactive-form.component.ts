import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  genders: string[] = ['male','female'];
  miFormulario: FormGroup; //conjunto de forms controls
  forbiddenUsernames: string[] = ['Chris', 'Anna'];
  forbiddenEmail: string = 'test@gmail.com';
  
  ngOnInit(): void {
    this.miFormulario = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.miFormulario.statusChanges.subscribe(s => console.log(s));
  }

  onSubmit() {
    console.log(this.miFormulario);

    // this.miFormulario.setValue({
    //   userData: {
    //     username: 'agregado',
    //     email: ''
    //   },
    //   gender: 'female',
    //   hobbies: []
    // });

    this.miFormulario.reset();

    this.miFormulario.patchValue({
      userData: {
        username: 'admin'
      }
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);

    (<FormArray>this.miFormulario.get('hobbies')).push(control);
  }

  // getControls() {
  //   return (<FormArray>this.miFormulario.get('hobbies')).controls;
  // }

  get controls() {
    return (<FormArray>this.miFormulario.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): { [s:string]: boolean } {
    if(this.forbiddenUsernames.indexOf(control.value) !==-1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === this.forbiddenEmail) {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return promise;
  }

  eliminarRegistro(index: number) {
   (<FormArray>this.miFormulario.get('hobbies')).removeAt(index);
  }

  removeAll(): void {
    (<FormArray>this.miFormulario.get('hobbies')).clear();
  }
}
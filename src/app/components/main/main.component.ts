import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Alumno } from 'src/app/models/alumnos.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  formularioRegistro: FormGroup;
  esValido?: boolean;
  mensaje?: string;
  listaAlumnos?: Alumno[] = [];

  constructor() {
    let regexCorreo: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    let regexTelefono: string = '^[0-9]*$';
    let controles: any = {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      correo: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(regexCorreo),
      ]),
      telefonoFijo: new FormControl('', [
        Validators.required,
        Validators.pattern(regexTelefono),
      ]),
      telefonoCelular: new FormControl('', [
        Validators.required,
        Validators.pattern(regexTelefono),
      ]),
    };

    this.formularioRegistro = new FormGroup(controles);
  }

  registrar(event: Event) {
    const nombre: string = this.formularioRegistro.controls['nombre'].value;
    const apellido: string = this.formularioRegistro.controls['apellido'].value;
    const direccion: string =
      this.formularioRegistro.controls['direccion'].value;
    const correo: string = this.formularioRegistro.controls['correo'].value;
    const telefonoFijo: string =
      this.formularioRegistro.controls['telefonoFijo'].value;
    const telefonoCelular: string =
      this.formularioRegistro.controls['telefonoCelular'].value;

    let alumno: Alumno = new Alumno(
      nombre,
      apellido,
      direccion,
      correo,
      telefonoFijo,
      telefonoCelular
    );

    this.listaAlumnos?.push(alumno);

    this.formularioRegistro.reset();
  }
}

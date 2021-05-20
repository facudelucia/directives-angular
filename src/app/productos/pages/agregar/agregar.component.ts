import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      .hidden{
        visibility:hidden;
      }
    `
  ]
})
export class AgregarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })
  color: string = "red"
  texto1: string = "Facundo"
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  guardar() {

  }
  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)!.invalid && this.miFormulario.get(campo)!.touched
  }
  cambiarNombre() {
    this.texto1 = Math.random().toString()
  }
  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    this.color = color
  }
}

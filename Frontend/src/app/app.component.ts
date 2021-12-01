import { Component } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestión de empleados';
  personaArr:Persona[]=[
    {id: 414141, nombre: 'Daniel Manrique', telefono: 3100000000,correo: 'dmanrique@gmail.com'},
    {id: 525252, nombre: 'Daniela Giraldo', telefono: 3130000000,correo: 'dgiraldo@gmail.com'},
    {id: 636363, nombre: 'Nicoll Mendez', telefono: 3050000000,correo: 'nmendez@gmail.com'},
  ]
}

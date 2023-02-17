import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  email: string = '';
  telefono: string = ''; 
  ciudad: string = '';
  pais: string = '';
  whatsapplink: string = '';

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.email = data.email;
      this.telefono = data.telefono;
      this.ciudad = data.ciudad;
      this.pais = data.pais;
      this.whatsapplink = data.whatsapplink;
  })
}

}

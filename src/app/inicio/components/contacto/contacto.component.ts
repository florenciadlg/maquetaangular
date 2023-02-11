import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  nombrecompleto: string = '';
  email: string = '';
  // no sé si teléfono es string o es dato de números
  telefono: string = ''; 
  ubicacion: string = '';
  // whatsapplink: no sé cómo se pone que es link

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.nombrecompleto = data.nombrecompleto;
      this.email = data.email;
      this.telefono = data.telefono;
      this.ubicacion = data.ubicacion;
  })
}

}

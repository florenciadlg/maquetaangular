import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {

  fotoperfil: any;
  presentacion: string = '';

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.fotoperfil = data.fotoperfil;
      this.presentacion = data.presentacion;
  })
}
}
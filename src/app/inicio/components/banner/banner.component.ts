import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  // banner: no sé cómo se pone que es dato de img
  bienvenida: string = '';
  profesion: string = '';
  // curriculum: no sé cómo se pone que es archivo descargable

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.bienvenida = data.bienvenida;
      this.profesion = data.profesion;
  })
}

}
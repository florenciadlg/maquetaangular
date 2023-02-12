import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banner: any;
  bienvenida: string = '';
  profesion: string = '';
 
  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.banner = data.banner;
      this.bienvenida = data.bienvenida;
      this.profesion = data.profesion;
  })
}

}
import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-redessociales',
  templateUrl: './redessociales.component.html',
  styleUrls: ['./redessociales.component.css']
})
export class RedessocialesComponent implements OnInit {

  redes: any = [];

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.redes = data.redes;
  })
}
}
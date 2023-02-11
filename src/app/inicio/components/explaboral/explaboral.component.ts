import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-explaboral',
  templateUrl: './explaboral.component.html',
  styleUrls: ['./explaboral.component.css']
})
export class ExplaboralComponent implements OnInit {

  experiencialaboral: any = [];

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.experiencialaboral = data.experiencialaboral;
  })
}
}
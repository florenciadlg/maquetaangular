import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-expeducativa',
  templateUrl: './expeducativa.component.html',
  styleUrls: ['./expeducativa.component.css']
})
export class ExpeducativaComponent implements OnInit {

  educacion: any = [];

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.educacion = data.educacion;
  })
}
}
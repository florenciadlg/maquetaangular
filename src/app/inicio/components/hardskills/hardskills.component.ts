import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent implements OnInit {

  habilidades: any = [];

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.habilidades = data.habilidades;
  })
}
}
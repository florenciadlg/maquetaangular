import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-softskillsidiomas',
  templateUrl: './softskillsidiomas.component.html',
  styleUrls: ['./softskillsidiomas.component.css']
})
export class SoftskillsidiomasComponent implements OnInit {

  idiomas: any = [];
  fortalezas: any = [];

  constructor(private datos: DatosService) {}

  ngOnInit(): void {
    this.datos.leerDatos().subscribe(data => {
      this.idiomas = data.idiomas;
      this.fortalezas = data.fortalezas;
  })
}
}
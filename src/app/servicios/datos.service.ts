import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private jsondatos:HttpClient) { }
  leerDatos(): Observable<any> {
    return this.jsondatos.get('./assets/json/portfolioangular.json');
}
}
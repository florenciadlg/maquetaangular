import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/page/inicio/inicio.component';
import { NavbarinicioComponent } from './inicio/components/navbarinicio/navbarinicio.component';
import { BannerComponent } from './inicio/components/banner/banner.component';
import { RedessocialesComponent } from './inicio/components/redessociales/redessociales.component';
import { SobremiComponent } from './inicio/components/sobremi/sobremi.component';
import { HardskillsComponent } from './inicio/components/hardskills/hardskills.component';
import { SoftskillsidiomasComponent } from './inicio/components/softskillsidiomas/softskillsidiomas.component';
import { ProyectosComponent } from './inicio/components/proyectos/proyectos.component';
import { AprendizajeComponent } from './inicio/components/aprendizaje/aprendizaje.component';
import { ExplaboralComponent } from './inicio/components/explaboral/explaboral.component';
import { ExpeducativaComponent } from './inicio/components/expeducativa/expeducativa.component';
import { ContactoComponent } from './inicio/components/contacto/contacto.component';
import { PanelComponent } from './panel/page/panel/panel.component';
import { NavbarpanelComponent } from './panel/components/navbarpanel/navbarpanel.component';
import { MenutabsComponent } from './panel/components/menutabs/menutabs.component';
import { PresentacionComponent } from './panel/components/presentaciontab/presentacion.component';
import { RedestabComponent } from './panel/components/redestab/redestab.component';
import { SobremitabComponent } from './panel/components/sobremitab/sobremitab.component';
import { ProyectostabComponent } from './panel/components/proyectostab/proyectostab.component';
import { AprendizajetabComponent } from './panel/components/aprendizajetab/aprendizajetab.component';
import { ContactotabComponent } from './panel/components/contactotab/contactotab.component';
import { ErrorComponent } from './error/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarinicioComponent,
    BannerComponent,
    RedessocialesComponent,
    SobremiComponent,
    HardskillsComponent,
    SoftskillsidiomasComponent,
    ProyectosComponent,
    AprendizajeComponent,
    ExplaboralComponent,
    ExpeducativaComponent,
    ContactoComponent,
    PanelComponent,
    NavbarpanelComponent,
    MenutabsComponent,
    PresentacionComponent,
    RedestabComponent,
    SobremitabComponent,
    ProyectostabComponent,
    AprendizajetabComponent,
    ContactotabComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

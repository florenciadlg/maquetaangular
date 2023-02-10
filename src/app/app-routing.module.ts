import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error/error.component';
import { InicioComponent } from './inicio/page/inicio/inicio.component';
import { PanelComponent } from './panel/page/panel/panel.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'admin', component:PanelComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

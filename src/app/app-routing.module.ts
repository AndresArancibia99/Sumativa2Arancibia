import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgregarComponent} from './agregar/agregar.component';
import {ActualizarComponent} from './actualizar/actualizar.component';
import {BuscarComponent} from './buscar/buscar.component';
const routes: Routes = [
  {path: 'agregar', component: AgregarComponent},
  {path: 'actualizar', component: ActualizarComponent},
  {path: 'buscar', component: BuscarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

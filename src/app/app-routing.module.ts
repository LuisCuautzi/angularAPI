import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHospitalComponent } from './ListarHospital/listar-hospital/listar-hospital.component';
import { AltaHospitalComponent } from './AltaHospital/alta-hospital/alta-hospital.component';
import { DetallesHospitalComponent } from './DetallesHospital/detalles-hospital/detalles-hospital.component';
import { EdicionHospitalComponent } from './EdicionHospital/edicion-hospital/edicion-hospital.component';

const routes: Routes = [
  {path: 'listaHospital' , component: ListarHospitalComponent},
  {path: 'altaHospital' , component: AltaHospitalComponent},
  {path: 'detallesHospital/:id', component: DetallesHospitalComponent},
  {path: 'edicionHospital/:id', component: EdicionHospitalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

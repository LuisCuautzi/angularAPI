import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarHospitalComponent } from './ListarHospital/listar-hospital/listar-hospital.component';
import { AltaHospitalComponent } from './AltaHospital/alta-hospital/alta-hospital.component';
import { DetallesHospitalComponent } from './DetallesHospital/detalles-hospital/detalles-hospital.component';
import { EdicionHospitalComponent } from './EdicionHospital/edicion-hospital/edicion-hospital.component';
import { ListarMedicoComponent } from './ListarMedico/listar-medico/listar-medico.component';
import { AltaMedicoComponent } from './AltaMedico/alta-medico/alta-medico.component';
import { DetalleMedicoComponent } from './DetalleMedico/detalle-medico/detalle-medico.component';
import { EdicionMedicoComponent } from './EdicionMedico/edicion-medico/edicion-medico.component';
import { ListarHistorialComponent } from './ListarHistorial/listar-historial/listar-historial.component';
import { AltaHistorialComponent } from './AltaHistorial/alta-historial/alta-historial.component';
import { DetalleHistorialComponent } from './DetalleHistorial/detalle-historial/detalle-historial.component';
import { EdicionHistorialComponent } from './EdicionHistorial/edicion-historial/edicion-historial.component';
import { ListarCitaComponent } from './ListarCita/listar-cita/listar-cita.component';
import { AltaCitaComponent } from './AltaCita/alta-cita/alta-cita.component';
import { DetalleCitaComponent } from './DetalleCita/detalle-cita/detalle-cita.component';
import { EdicionCitaComponent } from './EdicionCita/edicion-cita/edicion-cita.component';
import { ListarPacienteComponent } from './ListarPaciente/listar-paciente/listar-paciente.component';
import { AltaPacienteComponent } from './AltaPaciente/alta-paciente/alta-paciente.component';
import { DetallePacienteComponent } from './DetallePaciente/detalle-paciente/detalle-paciente.component';
import { EdicionPacienteComponent } from './EdicionPaciente/edicion-paciente/edicion-paciente.component';

const routes: Routes = [
  {path: 'listaHospital' , component: ListarHospitalComponent},
  {path: 'altaHospital' , component: AltaHospitalComponent},
  {path: 'detallesHospital/:id', component: DetallesHospitalComponent},
  {path: 'edicionHospital/:id', component: EdicionHospitalComponent},

  {path: 'listaMedico', component: ListarMedicoComponent},
  {path: 'altaMedico' , component: AltaMedicoComponent},
  {path: 'detalleMedico/:id', component: DetalleMedicoComponent},
  {path: 'edicionMedico/:id', component: EdicionMedicoComponent},

  {path: 'listaHistorial', component: ListarHistorialComponent},
  {path: 'altaHistorial', component: AltaHistorialComponent},
  {path: 'detalleHistorial/:id', component: DetalleHistorialComponent},
  {path: 'edicionHistorial/:id', component: EdicionHistorialComponent},

  {path: 'listaCita', component: ListarCitaComponent},
  {path: 'altaCita', component: AltaCitaComponent},
  {path: 'detalleCita/:id', component: DetalleCitaComponent},
  {path: 'edicionCita/:id', component: EdicionCitaComponent},

  {path: 'listaPaciente', component: ListarPacienteComponent},
  {path: 'altaPaciente', component: AltaPacienteComponent},
  {path: 'detallePaciente/:id', component: DetallePacienteComponent},
  {path: 'edicionPaciente/:id', component: EdicionPacienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

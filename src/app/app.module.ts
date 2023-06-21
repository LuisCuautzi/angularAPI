import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    ListarHospitalComponent,
    AltaHospitalComponent,
    DetallesHospitalComponent,
    EdicionHospitalComponent,
    ListarMedicoComponent,
    AltaMedicoComponent,
    DetalleMedicoComponent,
    EdicionMedicoComponent,
    ListarHistorialComponent,
    AltaHistorialComponent,
    DetalleHistorialComponent,
    EdicionHistorialComponent,
    ListarCitaComponent,
    AltaCitaComponent,
    DetalleCitaComponent,
    EdicionCitaComponent,
    ListarPacienteComponent,
    AltaPacienteComponent,
    DetallePacienteComponent,
    EdicionPacienteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarHospitalComponent } from './ListarHospital/listar-hospital/listar-hospital.component';
import { AltaHospitalComponent } from './AltaHospital/alta-hospital/alta-hospital.component';
import { DetallesHospitalComponent } from './DetallesHospital/detalles-hospital/detalles-hospital.component';
import { EdicionHospitalComponent } from './EdicionHospital/edicion-hospital/edicion-hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarHospitalComponent,
    AltaHospitalComponent,
    DetallesHospitalComponent,
    EdicionHospitalComponent
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

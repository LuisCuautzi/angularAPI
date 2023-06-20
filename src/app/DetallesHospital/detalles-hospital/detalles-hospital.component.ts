import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-detalles-hospital',
  templateUrl: './detalles-hospital.component.html',
  styleUrls: ['./detalles-hospital.component.css']
})
export class DetallesHospitalComponent {
  private sub: any;
  private id: number = 0;

  constructor(private route: ActivatedRoute, private servicio: MiServicioService){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string id to a number
      console.log(this.id);

      this.servicio.obtenerHospitalById(this.id);
    });
  }

  get datosHospital(){
    return this.servicio.Hospital;
  }
}

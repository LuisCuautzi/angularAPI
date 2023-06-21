import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-detalle-medico',
  templateUrl: './detalle-medico.component.html',
  styleUrls: ['./detalle-medico.component.css']
})
export class DetalleMedicoComponent {
  private sub: any;
  private id: number = 0;

  constructor(private route: ActivatedRoute, private servicio: MiServicioService){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string id to a number
      console.log(this.id);

      this.servicio.obtenerMedicoById(this.id);
    });
  }

  get datosMedico(){
    return this.servicio.Medico;
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-detalle-cita',
  templateUrl: './detalle-cita.component.html',
  styleUrls: ['./detalle-cita.component.css']
})
export class DetalleCitaComponent {
  private sub: any;
  private id: number = 0;

  /**
   *
   */
  constructor( private route: ActivatedRoute, private servicio: MiServicioService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);

      this.servicio.obtenerListaCitasByPaciente(this.id);
    });
  }

  get CitasByPaciente(){
    return this.servicio.listaDeCitasByPaciente;
  }
}

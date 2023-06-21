import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.css']
})
export class DetallePacienteComponent {

  private sub: any;
  private id: number = 0;

  constructor(private route: ActivatedRoute, private servicio: MiServicioService){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string id to a number
      console.log(this.id);

      this.servicio.obtenerPacienteById(this.id);
    });
  }

  get datosPaciente(){
    return this.servicio.Paciente
  }
}

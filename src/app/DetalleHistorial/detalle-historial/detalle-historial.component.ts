import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-detalle-historial',
  templateUrl: './detalle-historial.component.html',
  styleUrls: ['./detalle-historial.component.css']
})
export class DetalleHistorialComponent {
  private sub: any;
  private id: number = 0;

  constructor(private route: ActivatedRoute, private servicio: MiServicioService){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string id to a number
      console.log(this.id);

      this.servicio.obtenerHistorialById(this.id);
    });
  }

  get datosHistorial(){
    return this.servicio.Historial;
  }
}

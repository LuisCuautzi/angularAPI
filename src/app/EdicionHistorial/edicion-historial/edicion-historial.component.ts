import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-edicion-historial',
  templateUrl: './edicion-historial.component.html',
  styleUrls: ['./edicion-historial.component.css']
})
export class EdicionHistorialComponent {

  @ViewChild("caja1")
  private refCaja1!: ElementRef

  @ViewChild("caja2")
  private refCaja2!: ElementRef

  @ViewChild("caja3")
  private refCaja3!: ElementRef

  private sub: any;
  private id: number = 0;

  /**
   *
   */
  constructor( private route: ActivatedRoute, private servicio: MiServicioService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.servicio.obtenerHistorialById(this.id);
    });
  }

  get datosHistorial(){
    return this.servicio.Historial;
  }

  GuardarDatos(): void{
    const fecha = this.refCaja1.nativeElement.value;
    const diagnostico = this.refCaja2.nativeElement.value;
    const tratamiento = this.refCaja3.nativeElement.value;

    console.log(fecha);
    console.log(diagnostico);
    console.log(tratamiento);

    this.servicio.actulizarHistorial(this.id, fecha, diagnostico, tratamiento);
  }
}

import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-edicion-hospital',
  templateUrl: './edicion-hospital.component.html',
  styleUrls: ['./edicion-hospital.component.css']
})
export class EdicionHospitalComponent {
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
      this.servicio.obtenerHospitalById(this.id);
    });
  }

  get datosHospital(){
    return this.servicio.Hospital;
  }

  GuardarDatos(): void{
    const nombre = this.refCaja1.nativeElement.value;
    const direccion = this.refCaja2.nativeElement.value;
    const telefono = this.refCaja3.nativeElement.value;

    console.log(nombre);
    console.log(direccion);
    console.log(telefono);

    this.servicio.actulizarHospital(this.id, nombre, direccion, telefono);
  }
}

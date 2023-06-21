import { Component, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-edicion-medico',
  templateUrl: './edicion-medico.component.html',
  styleUrls: ['./edicion-medico.component.css']
})
export class EdicionMedicoComponent {
  @ViewChild("caja1")
  private refCaja1!: ElementRef

  @ViewChild("caja2")
  private refCaja2!: ElementRef

  @ViewChild("caja3")
  private refCaja3!: ElementRef

  @ViewChild("caja4")
  private refCaja4! : ElementRef;

  @ViewChild("caja5")
  private refCaja5! : ElementRef;

  private sub: any;
  private id: number = 0;

  /**
   *
   */
  constructor( private route: ActivatedRoute, private servicio: MiServicioService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.servicio.obtenerMedicoById(this.id);
    });
  }

  get datosMedico(){
    return this.servicio.Medico;
  }

  GuardarDatos(): void{
    const name = this.refCaja1.nativeElement.value;
    const apellido = this.refCaja2.nativeElement.value;
    const celular = this.refCaja3.nativeElement.value;
    const especialidad = this.refCaja4.nativeElement.value;
    const status = this.refCaja5.nativeElement.value;

    console.log(name);
    console.log(apellido);
    console.log(celular);
    console.log(especialidad);
    console.log(status);

    this.servicio.actulizarMedico(this.id, name, apellido, celular,especialidad,status);
  }
}

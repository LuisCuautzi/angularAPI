import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';

@Component({
  selector: 'app-edicion-paciente',
  templateUrl: './edicion-paciente.component.html',
  styleUrls: ['./edicion-paciente.component.css']
})
export class EdicionPacienteComponent {
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

  @ViewChild("caja6")
  private refCaja6! : ElementRef;

  private sub: any;
  private id: number = 0;

  /**
   *
   */
  constructor( private route: ActivatedRoute, private servicio: MiServicioService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.servicio.obtenerPacienteById(this.id);
    });
  }

  get datosPaciente(){
    return this.servicio.Paciente;
  }

  GuardarDatos(): void{
    const nombre = this.refCaja1.nativeElement.value;
    const apellido = this.refCaja2.nativeElement.value;
    const fecnac = this.refCaja3.nativeElement.value;
    const genero = this.refCaja4.nativeElement.value;
    const direccion = this.refCaja5.nativeElement.value;
    const celular = this.refCaja6.nativeElement.value;

    console.log(nombre);
    console.log(apellido);
    console.log(fecnac);
    console.log(genero);
    console.log(direccion);
    console.log(celular);

    this.servicio.actulizarPaciente(this.id, nombre, apellido, fecnac, genero, direccion, celular);
  }
}

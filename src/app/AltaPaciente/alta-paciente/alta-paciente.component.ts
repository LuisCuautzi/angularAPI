import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-paciente',
  templateUrl: './alta-paciente.component.html',
  styleUrls: ['./alta-paciente.component.css']
})
export class AltaPacienteComponent {

  constructor( private servicio: MiServicioService, private router: Router) {
    
  }

  @ViewChild("caja1")
  private refCaja1! : ElementRef;

  @ViewChild("caja2")
  private refCaja2! : ElementRef;

  @ViewChild("caja3")
  private refCaja3! : ElementRef;
 
  @ViewChild("caja4")
  private refCaja4! : ElementRef;

  @ViewChild("caja5")
  private refCaja5! : ElementRef;

  @ViewChild("caja6")
  private refCaja6! : ElementRef;

  GuardarDatos():void{
    const nombre = this.refCaja1.nativeElement.value;
    const apellido = this.refCaja2.nativeElement.value;
    const fecnac = this.refCaja3.nativeElement.value;
    const genero = this.refCaja4.nativeElement.value;
    const direccion = this.refCaja5.nativeElement.value;
    const celular = this.refCaja6.nativeElement.value;

    ///invocamos al metodo del servicio
    this.servicio.altaPaciente(nombre,apellido,fecnac,genero,direccion,celular);

    Swal.fire({
      title: 'Seguro que quieres Guardar al Paciente?',
      confirmButtonText: 'OK',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //redireccionar a la lista de aerolineas
        this.router.navigate(['/listaPaciente'])
      }
    })
}
}

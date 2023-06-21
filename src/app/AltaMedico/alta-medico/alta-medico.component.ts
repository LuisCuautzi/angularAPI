import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-medico',
  templateUrl: './alta-medico.component.html',
  styleUrls: ['./alta-medico.component.css']
})
export class AltaMedicoComponent {

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

  GuardarDatos():void{
    const name = this.refCaja1.nativeElement.value;
    const apellido = this.refCaja2.nativeElement.value;
    const celular = this.refCaja3.nativeElement.value;
    const especialidad = this.refCaja4.nativeElement.value;
    const status = this.refCaja5.nativeElement.value;

    ///invocamos al metodo del servicio
    this.servicio.altaMedico(name,apellido,celular,especialidad,status);

    Swal.fire({
      title: 'Seguro que quieres Guardar el Medico?',
      confirmButtonText: 'OK',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //redireccionar a la lista de aerolineas
        this.router.navigate(['/listaMedico'])
      }
    })
}

}

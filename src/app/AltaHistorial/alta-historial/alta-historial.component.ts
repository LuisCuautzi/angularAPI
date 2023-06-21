import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-historial',
  templateUrl: './alta-historial.component.html',
  styleUrls: ['./alta-historial.component.css']
})
export class AltaHistorialComponent {

  constructor( private servicio: MiServicioService, private router: Router) {
    
  }

  @ViewChild("caja1")
  private refCaja1! : ElementRef;

  @ViewChild("caja2")
  private refCaja2! : ElementRef;

  @ViewChild("caja3")
  private refCaja3! : ElementRef;

  GuardarDatos():void{
    const fecha = this.refCaja1.nativeElement.value;
    const diagnostico = this.refCaja2.nativeElement.value;
    const tratamiento = this.refCaja3.nativeElement.value;

    ///invocamos al metodo del servicio
    this.servicio.altaHistorial(fecha,diagnostico,tratamiento);

    Swal.fire({
      title: 'Seguro que quieres Guardar el Historial?',
      confirmButtonText: 'OK',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //redireccionar a la lista de aerolineas
        this.router.navigate(['/listaHistorial'])
      }
    })
}

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.css']
})
export class ListarHistorialComponent {

  constructor(private servicio: MiServicioService,private router: Router) {
    this.servicio.obtenerHistorial();
  }

  get ResHistorial(){
    return this.servicio.listaHistorial
  }

  eliminar(id: number): void{
    Swal.fire({
      title: 'estas seguro de Eliminar Hospital??',
      showCancelButton: true,
      confirmButtonText: `Ok`,
    }).then((result) => {
      if (result.isConfirmed){
        this.servicio.eliminarHistorial(id);
      }
      else if (result.isDenied){
        
      }
    })
  }
}

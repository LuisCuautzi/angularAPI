import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-hospital',
  templateUrl: './listar-hospital.component.html',
  styleUrls: ['./listar-hospital.component.css']
})
export class ListarHospitalComponent {
  /**
   *
   */
  constructor(private servicio: MiServicioService,private router: Router) {
    this.servicio.obtenerHospital();
  }

  get ResHospital(){
    return this.servicio.listahospital
  }

  eliminar(id: number): void{
    Swal.fire({
      title: 'estas seguro de Eliminar Hospital??',
      showCancelButton: true,
      confirmButtonText: `Ok`,
    }).then((result) => {
      if (result.isConfirmed){
        this.servicio.eliminarhospital(id);
      }
      else if (result.isDenied){
        
      }
    })
  }
}

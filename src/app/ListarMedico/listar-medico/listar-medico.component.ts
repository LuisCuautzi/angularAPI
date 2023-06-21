import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.css']
})
export class ListarMedicoComponent {


  constructor(private servicio: MiServicioService,private router: Router) {
    this.servicio.obtenerMedico();
  }

  get ResMedico(){
    return this.servicio.listaMedico
  }

  eliminar(id: number): void{
    Swal.fire({
      title: 'estas seguro de Eliminar Medico??',
      showCancelButton: true,
      confirmButtonText: `Ok`,
    }).then((result) => {
      if (result.isConfirmed){
        this.servicio.eliminarMedico(id);
      }
      else if (result.isDenied){
        
      }
    })
  }
}

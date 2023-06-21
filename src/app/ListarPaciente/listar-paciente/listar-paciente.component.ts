import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MiServicioService } from 'src/app/Miservicio/mi-servicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent {

  constructor(private servicio: MiServicioService,private router: Router) {
    this.servicio.obtenerPaciente();
  }

  get ResPaciente(){
    return this.servicio.listaPaciente
  }

  eliminar(id: number): void{
    Swal.fire({
      title: 'estas seguro de Eliminar al Paciente??',
      showCancelButton: true,
      confirmButtonText: `Ok`,
    }).then((result) => {
      if (result.isConfirmed){
        this.servicio.eliminarPaciente(id);
      }
      else if (result.isDenied){
        
      }
    })
  }

}

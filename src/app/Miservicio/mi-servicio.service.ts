import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  public listahospital: any[];
  public Hospital : any;

  public listaMedico: any[];
  public Medico: any;

  public listaHistorial: any[];
  public Historial: any;

  public listaPaciente: any[];
  public Paciente: any;

  public listaDeCitasByPaciente: any;

  constructor(private http: HttpClient, private router: Router) { 
    this.listahospital = [];
    this.Hospital = {};

    this.listaMedico = [];
    this.Medico = {};

    this.listaHistorial = [];
    this.Historial = {};

    this.listaPaciente = [];
    this.Paciente = {};

    this.listaDeCitasByPaciente = {};

  }

  //metodo get para hospitales
  obtenerHospital(): void{
    this.http.get("https://localhost:58264/api/hospital").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listahospital = respuesta;
    });
  }

  //metodo post alta de hospitales
  altaHospital(nombre: string, direccion: string, telefono: string): void {
    this.http.post("https://localhost:58264/api/hospital", {
      "nombre": nombre,
      "direccion": direccion,
      "telefono": telefono
    }).subscribe((respuesta: any)=> {
      console.log(respuesta);
    });
  }

  obtenerHospitalById(id: number): void {
    this.http.get("https://localhost:58264/api/hospital/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.Hospital = respuesta;
    })
  }

  actulizarHospital(id: number, nombre:string, direccion:string, telefono: string){
    this.http.put("https://localhost:58264/api/hospital/" + id, {"id": id, "nombre": nombre, "direccion": direccion, "telefono": telefono}).subscribe((respuesta: any) =>{
      console.log(respuesta);

      Swal.fire({
        title: 'Hospital actualizada correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigate(["/listaHospital"]) 
        }
      })
    })
  }

  eliminarhospital(id: number): void {
    this.http.delete("https://localhost:58264/api/hospital/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'Hospital eliminada correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.obtenerHospital();
        }
      })
    })
  }


/////Medico
  obtenerMedico(): void{
    this.http.get("https://localhost:58264/api/medico").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaMedico = respuesta;
    });
  }


  altaMedico(nombre: string, apellido: string, celular: string, especialidad: string, status: string): void {
    this.http.post("https://localhost:58264/api/medico", {
      "name": nombre,
      "apellido": apellido,
      "celular": celular,
      "especialidad": especialidad,
      "status": status
    }).subscribe((respuesta: any)=> {
      console.log(respuesta);
    });
  }

  obtenerMedicoById(id: number): void {
    this.http.get("https://localhost:58264/api/medico/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.Medico = respuesta;
    })
  }

  actulizarMedico(id: number, nombre:string, apellido:string, celular: string, especialidad: string, status: string){
    this.http.put("https://localhost:58264/api/medico/" + id, {"id": id, "name": nombre, "apellido": apellido, "celular": celular, "especialidad": especialidad, "status": status}).subscribe((respuesta: any) =>{
      console.log(respuesta);

      Swal.fire({
        title: 'Medico actualizado correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigate(["/listaMedico"]) 
        }
      })
    })
  }

  eliminarMedico(id: number): void {
    this.http.delete("https://localhost:58264/api/medico/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'Medico eliminada correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.obtenerMedico();
        }
      })
    })
  }

  //Historial
  obtenerHistorial(): void{
    this.http.get("https://localhost:58264/api/historial").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaHistorial = respuesta;
    });
  }

  altaHistorial(fecha: string, diagnostico: string, tratamiento: string): void {
    this.http.post("https://localhost:58264/api/historial", {
      "fecha": fecha,
      "diagnostico": diagnostico,
      "tratamiento": tratamiento
    }).subscribe((respuesta: any)=> {
      console.log(respuesta);
    });
  }

  obtenerHistorialById(id: number): void {
    this.http.get("https://localhost:58264/api/historial/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.Historial = respuesta;
    })
  }

  actulizarHistorial(id: number, fecha:string, diagnostico:string, tratamiento: string,){
    this.http.put("https://localhost:58264/api/historial/" + id, {"id": id, "fecha": fecha, "diagnostico": diagnostico, "tratamiento": tratamiento}).subscribe((respuesta: any) =>{
      console.log(respuesta);

      Swal.fire({
        title: 'Historial actualizado correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigate(["/listaHistorial"]) 
        }
      })
    })
  }

  eliminarHistorial(id: number): void {
    this.http.delete("https://localhost:58264/api/historial/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'Historial eliminado correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.obtenerHistorial();
        }
      })
    })
  }

  ///Paciente
  obtenerPaciente(): void{
    this.http.get("https://localhost:58264/api/paciente").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaPaciente = respuesta;
    });
  }

  altaPaciente(nombre: string, apellido: string, fecnac: string, genero: string, direccion: string, celular: string): void {
    this.http.post("https://localhost:58264/api/paciente", {
      "nombre": nombre,
      "apellido": apellido,
      "fecnac": fecnac,
      "genero": genero,
      "direccion": direccion,
      "celular": celular,
    }).subscribe((respuesta: any)=> {
      console.log(respuesta);
    });
  }

  obtenerPacienteById(id: number): void {
    this.http.get("https://localhost:58264/api/paciente/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.Paciente = respuesta;
    })
  }

  actulizarPaciente(id: number,nombre: string, apellido: string, fecnac:string, genero:string, direccion: string, celular: string){
    this.http.put("https://localhost:58264/api/paciente/" + id, {"id": id, "nombre": nombre, "apellido": apellido, "fecnac": fecnac, "genero": genero,
                                                                  "direccion": direccion, "celular": celular}).subscribe((respuesta: any) =>{
      console.log(respuesta);

      Swal.fire({
        title: 'Paciente actualizado correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.router.navigate(["/listaPaciente"]) 
        }
      })
    })
  }

  eliminarPaciente(id: number): void {
    this.http.delete("https://localhost:58264/api/paciente/" + id).subscribe((respuesta: any) => {
      console.log(respuesta);
      Swal.fire({
        title: 'Paciente eliminado correctamente',
        confirmButtonText: 'OK',
      }).then((result) => {
        if(result.isConfirmed) {
          this.obtenerPaciente();
        }
      })
    })
  }

  //citas
  obtenerListaCitasByPaciente(idPaciente: number): void {
    this.http.get("https://localhost:58264/api/paciente/" + idPaciente + "/citas").subscribe((respuesta) =>{
      console.log(respuesta);
      this.listaDeCitasByPaciente = respuesta
    })
  }

}

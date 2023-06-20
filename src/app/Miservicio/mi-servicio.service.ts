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

  constructor(private http: HttpClient, private router: Router) { 
    this.listahospital = [];
    this.Hospital = {};
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


}

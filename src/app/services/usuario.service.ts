import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  datos = new EventEmitter();
  constructor(private http:HttpClient) { }

  public create(data) :void{

    console.log(data);

    this.http.post(`${environment.url}/usuario/add`,data).subscribe(x=>{

      this.getAll();
    });


  }

  public update(data) :void{

    this.http.put(`${environment.url}/usuario/update`,data).subscribe(x=>{
      this.getAll();
    });



  }
  public getAll() :void{
     this.http.get(`${environment.url}/usuario/getAll`).subscribe(x=>{this.datos.emit(x)});
  }
  public getById(data):Observable<any> {

    return this.http.get(`${environment.url}/usuario/byId/${data}`);

  }
  public geFilter(data):void{
    this.http.get(`${environment.url}/usuario/filter/${data}`).subscribe(x=>{
      this.datos.emit(x);
    })
  }
  public delete(data) :void{

     this.http.delete(`${environment.url}/usuario/remove/${data}`).subscribe(x=>{
      this.getAll();
     });


  }

  }

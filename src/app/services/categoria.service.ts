import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  datos = new EventEmitter();
  constructor(private http:HttpClient) { }

  public create(data) :void{

    this.http.post(`${environment.url}/categoria/add`,data).subscribe(x=>{

      this.getAll();
    });


  }

  public update(data) :void{

    this.http.put(`${environment.url}/categoria/update`,data).subscribe(x=>{
      this.getAll();
    });



  }
  public getAll() :void{
     this.http.get(`${environment.url}/categoria/getAll`).subscribe(x=>{this.datos.emit(x)});
  }
  public getById(data):Observable<any> {

    return this.http.get(`${environment.url}/categoria/byId/${data}`);

  }
  public geFilter(data):void{
    this.http.get(`${environment.url}/categoria/filter/${data}`).subscribe(x=>{
      this.datos.emit(x);
    })
  }
  public delete(data) :void{

     this.http.delete(`${environment.url}/categoria/remove/${data}`).subscribe(x=>{
      this.getAll();
     });


  }

  }

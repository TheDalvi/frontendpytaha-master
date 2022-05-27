import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  datos = new EventEmitter();
  constructor(private http:HttpClient) { }

  public create(data) :void{

    this.http.post(`${environment.url}/rol/add`,data).subscribe(x=>{

      this.getAll();
    });


  }

  public update(data) :void{

    this.http.put(`${environment.url}/rol/update`,data).subscribe(x=>{
      this.getAll();
    });



  }
  public getAll() :void{
     this.http.get(`${environment.url}/rol/getAll`).subscribe(x=>{this.datos.emit(x)});
  }
  public getById(data):Observable<any> {

    return this.http.get(`${environment.url}/rol/ById/${data}`);

  }
  public geFilter(data):void{
    this.http.get(`${environment.url}/rol/${data}/1/100000`).subscribe(x=>{
      this.datos.emit(x);
    })
  }
  public delete(data) :void{

     this.http.delete(`${environment.url}/rol/remove/${data}`).subscribe(x=>{
      this.getAll();
     });


  }

  }
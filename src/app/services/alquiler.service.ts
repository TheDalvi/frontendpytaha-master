import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  headers ={"x-token":localStorage.getItem("x-token")};
  constructor(private http:HttpClient) { }
  datos = new EventEmitter();

  public getAll() :void{
    console.log(this.headers)
    this.http.get(`${environment.url}/alquiler/getall`,{headers:this.headers}).subscribe(x=>
      {
        console.log(x)
        this.datos.emit(x)}
      );
 }
 public getById(text) :Observable<any> {
return  this.http.get(`${environment.url}/alquiler/getById/${text}`)
}

 public getFilter(text) :void{
  this.http.get(`${environment.url}/alquiler-filter/${text}`).subscribe(x=>
    {
      console.log(x)
      this.datos.emit(x)}
    );
}

public Delete(id) :void{
  this.http.delete(`${environment.url}/alquiler/remove/${id}`).subscribe(x=>
    {
      console.log(x)
      this.getAll();}
    );
}

public update(data) :void{
  this.http.put(`${environment.url}/alquiler/update`,data).subscribe(x=>
    {
      console.log(x)
      this.getAll();}
    );
}

public create(data,id) :void{

  this.http.post(`${environment.url}/alquiler/add/${id}`,data).subscribe(x=>{

    this.getAll();
  });


}


}

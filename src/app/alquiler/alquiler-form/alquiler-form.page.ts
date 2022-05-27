import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-alquiler-form',
  templateUrl: './alquiler-form.page.html',
  styleUrls: ['./alquiler-form.page.scss'],
})

export class AlquilerFormPage implements OnInit {
  public form ;
  constructor(private service:AlquilerService,private CategoriaService:CategoriaService,private activatedRoute: ActivatedRoute,private router: NavController,private builder:FormBuilder) {

   }
  list=[]
  usuario;
  id;
  binding;
  categorias;
  ngOnInit() {

    this.service.datos.subscribe(x=>{
      this.list=x.result;
    })

    this.CategoriaService.datos.subscribe(x=>{
      this.categorias=x.result;
      console.log(x)
    })

    this.getAll();
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.form= this.builder.group({
      Id:[(this.usuario && this.usuario.Id)?this.usuario.Id:null],
      Descripcion:[(this.usuario && this.usuario.Descripcion)?this.usuario.Descripcion:""],
      Lat:[(this.usuario && this.usuario.Lat)?this.usuario.Lat:""],
      Lon:[(this.usuario && this.usuario.Lon)?this.usuario.Lon:""],
      Foto:[(this.usuario && this.usuario.Foto)?this.usuario.Foto:""],
      AceptaMascota:[(this.usuario && this.usuario.AceptaMascota)?this.usuario.AceptaMascota:""],
      Referencia:[(this.usuario && this.usuario.Referencia)?this.usuario.Referencia:""],
      Precio:[(this.usuario && this.usuario.Precio)?this.usuario.Precio:""],
      CantidadHabitaciones:[(this.usuario && this.usuario.CantidadHabitaciones)?this.usuario.CantidadHabitaciones:""],
      Observacion:[(this.usuario && this.usuario.Observacion)?this.usuario.Observacion:""],
      telefono:[(this.usuario && this.usuario.telefono)?this.usuario.telefono:""],
      categoriaId:[(this.usuario && this.usuario.categoriaId)?this.usuario.categoriaId:""],
    });
    this.getById();
    console.log(this.usuario);


  }

  onChange($event){

  this.form.controls.CategoriaId=$event.detail.value;
  console.log(this.form.value);
  }


getById(){
  if(this.id){
    this.service.getById(this.id).subscribe(x=>{
      this.usuario=x.result
      this.form= this.builder.group({
        Id:[(this.usuario && this.usuario.Id)?this.usuario.Id:null],
        Descripcion:[(this.usuario && this.usuario.Descripcion)?this.usuario.Descripcion:""],
        Lat:[(this.usuario && this.usuario.Lat)?this.usuario.Lat:""],
        Lon:[(this.usuario && this.usuario.Lon)?this.usuario.Lon:""],
        Foto:[(this.usuario && this.usuario.Foto)?this.usuario.Foto:""],
        AceptaMascota:[(this.usuario && this.usuario.AceptaMascota)?this.usuario.AceptaMascota:""],
        Referencia:[(this.usuario && this.usuario.Referencia)?this.usuario.Referencia:""],
        Precio:[(this.usuario && this.usuario.Precio)?this.usuario.Precio:""],
        CantidadHabitaciones:[(this.usuario && this.usuario.CantidadHabitaciones)?this.usuario.CantidadHabitaciones:""],
        Observacion:[(this.usuario && this.usuario.Observacion)?this.usuario.Observacion:""],
        telefono:[(this.usuario && this.usuario.telefono)?this.usuario.telefono:""],
        categoriaId:[(this.usuario && this.usuario.categoriaId)?this.usuario.categoriaId:""],
      });
        this.binding=this.usuario.categoriaId;
    })
    this.form= this.builder.group({
      Id:[(this.usuario && this.usuario.Id)?this.usuario.Id:null],
      Descripcion:[(this.usuario && this.usuario.Descripcion)?this.usuario.Descripcion:""],
      Lat:[(this.usuario && this.usuario.Lat)?this.usuario.Lat:""],
      Lon:[(this.usuario && this.usuario.Lon)?this.usuario.Lon:""],
      Foto:[(this.usuario && this.usuario.Foto)?this.usuario.Foto:""],
      AceptaMascota:[(this.usuario && this.usuario.AceptaMascota)?this.usuario.AceptaMascota:""],
      Referencia:[(this.usuario && this.usuario.Referencia)?this.usuario.Referencia:""],
      Precio:[(this.usuario && this.usuario.Precio)?this.usuario.Precio:""],
      CantidadHabitaciones:[(this.usuario && this.usuario.CantidadHabitaciones)?this.usuario.CantidadHabitaciones:""],
      Observacion:[(this.usuario && this.usuario.Observacion)?this.usuario.Observacion:""],
      telefono:[(this.usuario && this.usuario.telefono)?this.usuario.telefono:""],
      categoriaId:[(this.usuario && this.usuario.categoriaId)?this.usuario.categoriaId:""],
    });
  }

}

  getAll(){
    this.CategoriaService.getAll();
  }
  onClickBack(){
    this.router.pop();
  }

  onClickCreate(){
    if(this.id){
      console.log(this.id)
      this.service.update(this.form.value);
    }
    else{
      this.service.create(this.form.value,this.binding);
    }
    console.log(this.form.value);
    this.router.pop();

  }

}

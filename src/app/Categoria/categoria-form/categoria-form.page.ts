import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.page.html',
  styleUrls: ['./categoria-form.page.scss'],
})

export class CategoriaFormPage implements OnInit {
  public form ;
  constructor(private service:CategoriaService,private activatedRoute: ActivatedRoute,private router: NavController,private builder:FormBuilder) {

   }
  list=[]
  usuario;
  id;
  ngOnInit() {

    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.form= this.builder.group({
      Descripcion:[(this.usuario && this.usuario.Descripcion)?this.usuario.Descripcion:""],
    });
    this.getById();
    console.log(this.usuario);


  }


getById(){
  if(this.id){
    this.service.getById(this.id).subscribe(x=>{
      this.usuario=x.result
      this.form= this.builder.group({
        Descripcion:[(this.usuario && this.usuario.Descripcion)?this.usuario.Descripcion:""],
        Id:this.id
      });
        console.log(this.usuario)
    })
    this.form= this.builder.group({
      Descripcion:[(this.usuario && this.usuario.Descripcion)?this.usuario.Descripcion:""],
      Id:null
    });
  }

}

  getAll(){
    this.service.getAll();
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
      this.service.create(this.form.value);
    }
    console.log(this.form.value);
    this.router.pop();

  }

}

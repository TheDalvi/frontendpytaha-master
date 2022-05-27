import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoriaService } from 'src/app/services/categoria.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.page.html',
  styleUrls: ['./usuario-form.page.scss'],
})
export class UsuarioFormPage implements OnInit {
  public form ;
  constructor(private service:UsuarioService,private activatedRoute: ActivatedRoute,private router: NavController,private builder:FormBuilder) {

   }
  list=[]
  usuario;
  id;
  ngOnInit() {

    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.form= this.builder.group({
      Nombre:[(this.usuario && this.usuario.Nombre)?this.usuario.Nombre:""],
      Email:[(this.usuario && this.usuario.Email)?this.usuario.Email:""],
      Telefono:[(this.usuario && this.usuario.Telefono)?this.usuario.Telefono:""],
      Rol:[(this.usuario && this.usuario.Rol)?this.usuario.Rol:""],
      Password:[(this.usuario && this.usuario.Password)?this.usuario.Password:""],
      Token:[(this.usuario && this.usuario.Token)?this.usuario.Token:""],
      Usuario:[(this.usuario && this.usuario.Usuario)?this.usuario.Usuario:""]
    });
    this.getById();
    console.log(this.usuario);
    console.log(this.form.value)
    console.log(this.form)
  }


getById(){
  if(this.id){
    console.log(this.id)
    this.service.getById(this.id).subscribe(x=>{
      this.usuario=x.result
      console.table(this.usuario)
      this.form= this.builder.group({
        Id:[((this.usuario && this.usuario.Id )? this.usuario.Id:"")],
        Nombre:[(this.usuario && this.usuario.Nombre)?this.usuario.Nombre:""],
        Email:[(this.usuario && this.usuario.Email)?this.usuario.Email:""],
        Telefono:[(this.usuario && this.usuario.Telefono)?this.usuario.Telefono:""],
        Rol:[(this.usuario && this.usuario.Rol)?this.usuario.Rol:""],
        Password:[(this.usuario && this.usuario.Password)?this.usuario.Password:""],
        Token:[(this.usuario && this.usuario.Token)?this.usuario.Token:""],
        Usuario:[(this.usuario && this.usuario.Usuario)?this.usuario.Usuario:""]
      });
        console.log(this.usuario)
    })
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
      console.log(this.form.value);
      this.service.create(this.form.value);
    }

    console.log(this.form.value);
    this.router.pop();

  }

}

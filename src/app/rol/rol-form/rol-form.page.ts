import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';


@Component({
  selector: 'app-rol-form',
  templateUrl: './rol-form.page.html',
  styleUrls: ['./rol-form.page.scss'],
})
export class RolFormPage implements OnInit {
  public form ;
  constructor(private service:RolService,private activatedRoute: ActivatedRoute,private router: NavController,private builder:FormBuilder) { }
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

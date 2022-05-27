import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';


@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.page.html',
  styleUrls: ['./rol-list.page.scss'],
})
export class RolListPage implements OnInit {

  constructor(private service:RolService,private activatedRoute: ActivatedRoute,private router: NavController) { }
  list=[]
  filtro:"";
  ngOnInit() {
    this.service.datos.subscribe(x=>{
      this.list=x.result;
    });

    this.getAll();
  }

  getAll(){
    this.service.getAll();

  }
  onClickBack(){
    this.router.pop();
  }
  onClickDelete(item){
    this.service.delete(item.Id);
  }

  searchChange(event){
    console.log(event.detail,this.filtro)
    if(event.detail.value===''){
      this.getAll();
    }
    else
    {
      if (this.filtro!==event.detail.value){
      this.filtro=event.detail.value;
      this.service.geFilter(event.detail.value);
    }
  }

  }

  onClickEdit(item){
    this.router.navigateForward([`rol-form/${item.Id}`])

  }


  onClick(){
    this.router.navigateForward(['rol-form']);
  }
  favorite(item){

  }
share(item){

}

unread(item){

}

}



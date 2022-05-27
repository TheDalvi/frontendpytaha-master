
import { Router, ActivatedRoute } from '@angular/router';
import { AlquilerService } from '../../services/alquiler.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, NavController } from '@ionic/angular';
import { CoordInfo } from '../../models/coord-info.model';
import { Marker } from '../../models/marker.model';
import { MapControllerService } from '../../services/map-controller.service';
declare var google;
@Component({
  selector: 'app-alquiler-list-admin',
  templateUrl: './alquiler-list-admin.page.html',
  styleUrls: ['./alquiler-list-admin.page.scss'],
})
export class AlquilerListAdminPage implements OnInit {
  productos=[];

  currentTelefono='';

  categorias=[];
  constructor(private service:AlquilerService,
    private activatedRoute: ActivatedRoute,
    private router: NavController) { }
      list=[]
      filtro:"";

  ngOnInit() {
    this.service.datos.subscribe(x=>{
      console.log(x)
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
    console.log(item)
    this.service.Delete(item.Id);
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
      this.service.getFilter(event.detail.value);
    }
  }

  }

  onClickEdit(item){
    this.router.navigateForward([`alquiler-form/${item.Id}`])

  }


  onClick(){
    this.router.navigateForward(['usuario-form']);
  }
  favorite(item){

  }
  share(item){

  }

  unread(item){

  }
}

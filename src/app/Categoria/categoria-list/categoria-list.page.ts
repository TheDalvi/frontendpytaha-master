import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.page.html',
  styleUrls: ['./categoria-list.page.scss'],
})
export class CategoriaListPage implements OnInit {

  constructor(private service:CategoriaService,
    private activatedRoute: ActivatedRoute,
    private router: NavController) { }
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
    this.router.navigateForward([`categoria-form/${item.Id}`])

  }


  onClick(){
    this.router.navigateForward(['categoria-form']);
  }
  favorite(item){

  }
share(item){

}

unread(item){

}

}

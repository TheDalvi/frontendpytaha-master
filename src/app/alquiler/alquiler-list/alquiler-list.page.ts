
import { Router } from '@angular/router';
import { AlquilerService } from './../../services/alquiler.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { CoordInfo } from '../../models/coord-info.model';
import { Marker } from '../../models/marker.model';
import { MapControllerService } from '../../services/map-controller.service';
declare var google;
@Component({
  selector: 'app-alquiler-list',
  templateUrl: './alquiler-list.page.html',
  styleUrls: ['./alquiler-list.page.scss'],
})
export class AlquilerListPage implements OnInit {
  productos=[];

  currentTelefono='';

  categorias=[];
  constructor(private alquilerService:AlquilerService,
    menu: MenuController,private router: Router,
      private alertController: AlertController, private mapController: MapControllerService) { }
      map = null;
      marker: Marker = null;
      coordInfo: CoordInfo = null;
  show=true;
  ngOnInit() {
    this.listarPorductos();
    this.show=false;

  }


  onClickH(){
    this.show=false;
  }

  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');

    const myLatLng = {
      lat:  this.marker.position.lat,
      lng: this.marker.position.lng
    };

    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 14
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      this.addMarker(this.marker);
      mapEle.classList.add('show-map');
    });
  }

  addMarker(marker: Marker) {
    var mapMarker = new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
    this.addInfoToMarker(marker, mapMarker);
    return mapMarker;
  }

  addInfoToMarker(marker: Marker, mapMarker: any) {
    try {
      this.mapController.getHttpData(marker).subscribe((coordData: any) => {
        this.coordInfo = {
          country: coordData.items[0].address.countryName,
          city: coordData.items[0].address.city,
          marker: marker
        };

        let infoWindowContent = `
        <div id="content" style="color: black;">
          <h2 id="firstHeading" class="firstHeading"> ${marker.title} </h2>
          <p>Pais: ${this.coordInfo.country} </p>
          <p>Ciudad: ${this.coordInfo.city} </p>
        </div>
        `;

        let infoWindow = new google.maps.InfoWindow({content: infoWindowContent});

        mapMarker.addListener('click', () => {
          infoWindow.open(this.map, mapMarker);
        });

      });
    } catch (error) {

    }

  }


  async sendMarker(lat,lon,Title) {
 {
      var marker: Marker = {
        position: {
          lat: parseFloat(lat),
          lng: parseFloat(lon)
        },
        title: Title
      }
      this.mapController.addMarker(marker);
    }
  }

  listarPorductos(){
    this.alquilerService.getAll();
    this.alquilerService.datos.subscribe(data=>{
      this.productos=data.result;

    })

  }
  buscar(event){
    let text=event.detail.value;
    text=text.length>0?text:null;
    if(text && text.trim().length>0){
      this.alquilerService.getFilter(text);
    }
    else {
      this.alquilerService.getAll();
    }

  }
  onClick(item){
    this.show=true;
    this.currentTelefono=item.telefono;
    console.log(item,"inico")
    this.sendMarker(item.Lat,item.Lon,item.Descripcion).then(x=>{})
    console.log("item")
    this.marker = this.mapController.getMarker();



    this.loadMap();
  }


  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };

}

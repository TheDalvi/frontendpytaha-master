import { Marker } from './../models/marker.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiKey = "yh7WhjMU8hZuuui_AE3tprr7h6JKg4SX-N8Z5gLLkj0";

@Injectable({
  providedIn: 'root'
})
export class MapControllerService {

  private marker: Marker = null;

  constructor(private http: HttpClient) { }

  getMarker(){
    return this.marker;
  }

  addMarker(marker: Marker) {
    this.marker = marker;
  }

  resetMarker(){
    this.marker = null;
  }

  getHttpData(marker: Marker) {

      var link = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${marker.position.lat},${marker.position.lng}&lang=es-DO&apikey=${apiKey}`;

        return this.http.get(link);



  }
}

import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private usuarioservice:UsuarioService) {}
  onLogout(){
      this.usuarioservice.logout().subscribe(x=>{
          console.log(x,"ok")
          localStorage.clear();
          localStorage.removeItem("x-token");
          localStorage.removeItem("usuario");
      })
  }

}

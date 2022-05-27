import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login-ingresar',
  templateUrl: './login-ingresar.page.html',
  styleUrls: ['./login-ingresar.page.scss'],
})
export class LoginIngresarPage implements OnInit {
 Email;
 Password;
  constructor(private usuarioService :UsuarioService) { }

  ngOnInit() {
  }

  onClick(){
    this.usuarioService.login({"Email":this.Email,"Password":this.Password}).subscribe(x=>{
        console.log(x.result.usuario.Id);

        localStorage.setItem("x-token",x.result.token);
        localStorage.setItem("usuario",JSON.stringify(x.result.usuario));
    })
    
  }

}

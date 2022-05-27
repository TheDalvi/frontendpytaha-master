import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginIngresarPageRoutingModule } from './login-ingresar-routing.module';

import { LoginIngresarPage } from './login-ingresar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginIngresarPageRoutingModule
  ],
  declarations: [LoginIngresarPage]
})
export class LoginIngresarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarInicioPageRoutingModule } from './registrar-inicio-routing.module';

import { RegistrarInicioPage } from './registrar-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarInicioPageRoutingModule
  ],
  declarations: [RegistrarInicioPage]
})
export class RegistrarInicioPageModule {}

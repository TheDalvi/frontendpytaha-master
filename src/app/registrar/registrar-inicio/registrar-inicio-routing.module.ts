import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarInicioPage } from './registrar-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarInicioPageRoutingModule {}

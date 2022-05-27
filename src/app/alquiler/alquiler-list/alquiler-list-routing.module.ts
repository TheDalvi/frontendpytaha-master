import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquilerListPage } from './alquiler-list.page';

const routes: Routes = [
  {
    path: '',
    component: AlquilerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlquilerListPageRoutingModule {}

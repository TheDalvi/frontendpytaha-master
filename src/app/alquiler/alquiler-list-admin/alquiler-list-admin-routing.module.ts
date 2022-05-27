import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlquilerListAdminPage } from './alquiler-list-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AlquilerListAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlquilerListPageAdminRoutingModule {}

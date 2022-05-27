import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolFormPage } from './rol-form.page';

const routes: Routes = [
  {
    path: '',
    component: RolFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolFormPageRoutingModule {}

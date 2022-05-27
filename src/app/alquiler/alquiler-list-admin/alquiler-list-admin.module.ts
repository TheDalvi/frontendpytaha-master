import { MapPageModule } from '../../map/map.module';
import { MapPage } from '../../map/map.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlquilerListPageAdminRoutingModule } from './alquiler-list-admin-routing.module';

import { AlquilerListAdminPage } from './alquiler-list-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlquilerListPageAdminRoutingModule,
    MapPageModule
  ],
  declarations: [AlquilerListAdminPage
  ],
})
export class AlquilerListPageAdminModule {}

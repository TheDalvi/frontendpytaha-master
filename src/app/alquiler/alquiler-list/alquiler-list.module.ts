import { MapPageModule } from './../../map/map.module';
import { MapPage } from './../../map/map.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlquilerListPageRoutingModule } from './alquiler-list-routing.module';

import { AlquilerListPage } from './alquiler-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlquilerListPageRoutingModule,
    MapPageModule
  ],
  declarations: [AlquilerListPage
  ],
})
export class AlquilerListPageModule {}

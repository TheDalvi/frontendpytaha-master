import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolListPageRoutingModule } from './rol-list-routing.module';

import { RolListPage } from './rol-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolListPageRoutingModule
  ],
  declarations: [RolListPage]
})
export class RolListPageModule {}

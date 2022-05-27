import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolFormPageRoutingModule } from './rol-form-routing.module';

import { RolFormPage } from './rol-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RolFormPage]
})
export class RolFormPageModule {}

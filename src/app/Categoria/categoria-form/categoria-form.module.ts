import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaFormPageRoutingModule } from './categoria-form-routing.module';

import { CategoriaFormPage } from './categoria-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaFormPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CategoriaFormPage]
})
export class CategoriaFormPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil6PageRoutingModule } from './perfil6-routing.module';

import { Perfil6Page } from './perfil6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perfil6PageRoutingModule
  ],
  declarations: [Perfil6Page]
})
export class Perfil6PageModule {}

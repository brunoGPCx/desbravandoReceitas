import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil4PageRoutingModule } from './perfil4-routing.module';

import { Perfil4Page } from './perfil4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perfil4PageRoutingModule
  ],
  declarations: [Perfil4Page]
})
export class Perfil4PageModule {}

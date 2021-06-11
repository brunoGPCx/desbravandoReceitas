import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil8PageRoutingModule } from './perfil8-routing.module';

import { Perfil8Page } from './perfil8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perfil8PageRoutingModule
  ],
  declarations: [Perfil8Page]
})
export class Perfil8PageModule {}

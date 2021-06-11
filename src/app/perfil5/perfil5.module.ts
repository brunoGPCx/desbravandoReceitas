import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil5PageRoutingModule } from './perfil5-routing.module';

import { Perfil5Page } from './perfil5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perfil5PageRoutingModule
  ],
  declarations: [Perfil5Page]
})
export class Perfil5PageModule {}

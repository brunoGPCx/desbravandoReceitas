import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil3PageRoutingModule } from './perfil3-routing.module';

import { Perfil3Page } from './perfil3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perfil3PageRoutingModule
  ],
  declarations: [Perfil3Page]
})
export class Perfil3PageModule {}

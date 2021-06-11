import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Perfil7PageRoutingModule } from './perfil7-routing.module';

import { Perfil7Page } from './perfil7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Perfil7PageRoutingModule
  ],
  declarations: [Perfil7Page]
})
export class Perfil7PageModule {}

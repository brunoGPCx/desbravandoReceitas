import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Termos1PageRoutingModule } from './termos1-routing.module';

import { Termos1Page } from './termos1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Termos1PageRoutingModule
  ],
  declarations: [Termos1Page]
})
export class Termos1PageModule {}

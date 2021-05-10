import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vermais2PageRoutingModule } from './vermais2-routing.module';

import { Vermais2Page } from './vermais2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vermais2PageRoutingModule
  ],
  declarations: [Vermais2Page]
})
export class Vermais2PageModule {}

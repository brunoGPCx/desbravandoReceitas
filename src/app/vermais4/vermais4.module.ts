import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Vermais4PageRoutingModule } from './vermais4-routing.module';

import { Vermais4Page } from './vermais4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vermais4PageRoutingModule
  ],
  declarations: [Vermais4Page]
})
export class Vermais4PageModule {}
